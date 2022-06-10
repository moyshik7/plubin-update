import axios from "axios";
import { CommandInteraction, Interaction, MessageEmbed } from "discord.js";
import { AnilistAnimeResult } from "../../types";

const Search = (searchString: string): Promise<AnilistAnimeResult> => {
    return new Promise((
        resolve: (any) => void,
        reject: (any) => void
    ): void => {
        if(!searchString){
            reject(new Error("No Search Term Provided"))
            return;
        }
        const query: string = `
        query ($search: String) {
            Media(search: $search, type: ANIME) {
                id
                title {
                    english
                    native
                }
                description (asHtml: false)
                season
                status
                episodes
                isAdult
                genres
            }
        }
        `
        axios.post("https://graphql.anilist.co",
            JSON.stringify({
                query: query,
                variables: {
                    search: searchString
                }
            }), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((r): void => {
            if(!r){
                reject("No Anime found with this Query")
                return;
            }
            let result: AnilistAnimeResult = {
                id: r.data.data.Media.id,
                title: r.data.data.Media.title,
                description: r.data.data.Media.description.replace(/<[^>]*>?/gm, ''),
                season: r.data.data.Media.season,
                status: r.data.data.Media.status,
                episodes: r.data.data.Media.episodes,
                isAdult: r.data.data.Media.isAdult,
                genres: r.data.data.Media.genres,
            }

            resolve(result)
            return;
        }).catch(reject)
    })
}

export const AnimeCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        let name = interaction.options.get("anime_name")
        if(!name || !name.value){
            /**
             * No search term provided
             * Send suggestion or something
             * Remember to put return; at bottom
             */
            return;
        }
        await interaction.deferReply()
        const animeResult = await Search((name.value as string))
        console.log(animeResult)
        let embed = new MessageEmbed()
        if(!animeResult){
            embed.setTitle("OOPSIE!!!")
            embed.setDescription("Could not find any animewith that name.\n\nTry searching with another term")
        } else {
            embed.setTitle(animeResult.title.english || animeResult.title.native)
            embed.setDescription(animeResult.description)
        }
        await interaction.editReply({
            embeds: [embed]
        })
    } catch (err){ console.log(err) }
}