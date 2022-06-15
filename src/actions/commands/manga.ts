import axios from "axios";
import { 
    ColorResolvable, 
    CommandInteraction, 
    MessageEmbed 
} from "discord.js";
import { AnilistMangaResult } from "../../types";

const Search = (searchString: string): Promise<AnilistMangaResult> => {
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
            Media(search: $search, type: MANGA) {
                id
                title {
                  english
                  native
                }
                description
                volumes
                chapters
                status
                isAdult
                genres
                coverImage {
                    large
                    color
                }
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
            let result: AnilistMangaResult = {
                id: r.data.data.Media.id,
                title: r.data.data.Media.title,
                description: r.data.data.Media.description.replace(/<[^>]*>?/gm, ''),
                status: r.data.data.Media.status,
                volumes: r.data.data.Media.volumes,
                chapters: r.data.data.Media.chapters,
                isAdult: r.data.data.Media.isAdult,
                genres: r.data.data.Media.genres,
                color: r.data.data.Media.coverImage.color,
                cover: {
                    medium: r.data.data.Media.coverImage.large,
                }
            }

            resolve(result)
            return;
        }).catch(reject)
    })
}

export const MangaCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        let name = interaction.options.get("manga_name")
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

        /**
         * Create blank message Embed
         * Change to EmberBuilder() in later versions
         */
        let embed = new MessageEmbed()

        /**
         * If no result show sorry 
         * Else show result
         */
        if(!animeResult){
            embed.setTitle("OOPSIE!!!")
            embed.setDescription("Could not find any manga with that name.\n\nTry searching with another term")
        } else {
            embed.setTitle(animeResult.title.english || animeResult.title.native)
            embed.setDescription(animeResult.description)
            embed.addField('\u200B', '\u200B')
            embed.addField("Also searched for:", animeResult.title.native)
            embed.addFields(
                {
                    name: "__**Chapters:**__",
                    value: `${animeResult.chapters || "0" }`,
                    inline: true
                }, {
                    name: "__**NSFW:**__",
                    value: `${animeResult.isAdult ? "Yes" : "No" }`,
                    inline: true
                }, {
                    name: "\u200B",
                    value: "\u200B"
                }, {
                    name: "**STATUS**",
                    value: animeResult.status,
                    inline: true
                }, {
                    name: "**Volumes**",
                    value: `${animeResult.volumes || "0"}`,
                    inline: true
                }, {
                    name: "__**Genres:**__",
                    value: animeResult.genres.join(", "),
                    inline: false
                }
            )
            embed.setImage(`https://img.anili.st/media/${animeResult.id}`)
            embed.setColor((animeResult.color as ColorResolvable))
        }
        await interaction.editReply({
            embeds: [embed]
        })
    } catch (err){ console.log(err) }
}