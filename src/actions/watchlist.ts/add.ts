import { ButtonInteraction, EmbedBuilder } from "discord.js";
import { Database } from "../../database";
import { DatabaseUser } from "../../types";
import { AddNewUser } from "../user/newuser";
import { FetchAnimeByID } from "./fetchanime";


export const WatchlistAdd = async (interaction: ButtonInteraction, db: Database, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferReply({ ephemeral: true })

        if(args.length < 2){
            interaction.editReply({
                content: "Something went wrong\nmessage: ID not found"
            }).catch(console.log)
            return;
        }
        if(!parseInt(args[0])){
            interaction.editReply({
                content: "Something went wrong\nmessage: Invalid ID"
            }).catch(console.log)
            return;
        }

        let animeID = parseInt(args[0])

        let user: DatabaseUser = await db.get({ id: interaction.user.id })
        if(!user){ user = await AddNewUser(db, interaction) }

        const isAlreadyAdded = user.watchlist.find(a => a.id === animeID)

        if(isAlreadyAdded){
            const emb = new EmbedBuilder()
                .setTitle("Anime is already in watchlist")
                .setDescription(`Use \`/watchlist\` to view your watchlist`)
                .setColor(0xFF6F61);
            interaction.editReply({
                embeds: [emb]
            }).catch(console.log)
            return;
        }

        const anime = await FetchAnimeByID(animeID)
        if(!anime){
            interaction.editReply({
                content: "Something went wrong\nmessage: Anime not found"
            }).catch(console.log)
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
        }).catch(console.log)
        return;
    } catch (err){ console.log(err) }
}