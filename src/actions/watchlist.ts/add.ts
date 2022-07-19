import { ButtonInteraction, EmbedBuilder } from "discord.js";
import { Database } from "../../database";
import { DatabaseUser } from "../../types";
import { AddNewUser } from "../user/newuser";
import { FetchAnimeByID } from "./fetchanime";


export const WatchlistAdd = async (interaction: ButtonInteraction, db: Database, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferReply({ ephemeral: true })

        if(args.length < 2){
            return;
        }
        if(!parseInt(args[0])){
            return;
            // Invalid id
        }

        let animeID = parseInt(args[0])

        let user: DatabaseUser = await db.get({ id: interaction.user.id })

        if(!user){
            user = await AddNewUser(db, interaction)
        }

        console.log(user)

        const isAlreadyAdded = user.watchlist.find(a => a.id === animeID)

        if(isAlreadyAdded){
            //Anime already added
            return;
        }

        const anime = await FetchAnimeByID(animeID)

        if(!anime){
            //Anime not found
            return;
        }

        user.watchlist.push({
            id: anime.id,
            name: anime.title.english || anime.title.native,
            watched: false
        })

        user.watchlist = user.watchlist.sort((a, b) => a.id - b.id)

        await db.update({ id: user.id }, user)
        const emb = new EmbedBuilder()
            .setTitle("Added to watchlist")
            .setDescription(`Added ${anime.title.english || anime.title.native} to your watchlist\n\nUse \`/watchlist\` to view your watchlist`)
            .setImage(`https://img.anili.st/media/${anime.id}`)
            .setColor(0x00FF00);
        interaction.editReply({
            embeds: [emb]
        })

        console.log(user)
    } catch (err){ console.log(err) }
}