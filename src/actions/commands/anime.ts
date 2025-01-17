import axios, { AxiosError } from "axios";
import { 
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ColorResolvable, 
    CommandInteraction, 
    EmbedBuilder 
} from "discord.js";
import { Sentry } from "../../sentry";
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
                bannerImage
                coverImage {
                  extraLarge
                  large
                  medium
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
            let result: AnilistAnimeResult = {
                id: r.data.data.Media.id,
                title: r.data.data.Media.title,
                description: r.data.data.Media.description.replace(/<[^>]*>?/gm, ''),
                season: r.data.data.Media.season,
                status: r.data.data.Media.status,
                episodes: r.data.data.Media.episodes,
                isAdult: r.data.data.Media.isAdult,
                genres: r.data.data.Media.genres,
                color: r.data.data.Media.coverImage.color,
                cover: {
                    large: r.data.data.Media.coverImage.extraLarge,
                    medium: r.data.data.Media.coverImage.large,
                    small: r.data.data.Media.coverImage.medium
                },
                banner: r.data.data.Media.bannerImage,
            }

            resolve(result)
            return;
        }).catch(err => {
            Sentry.captureMessage(`[Anilist] Error when fetching anime with search term ${searchString}\nMessage: ${(err as AxiosError).message}\nCode: ${(err as AxiosError).code}`)
            Sentry.captureException(err)
            reject(err)
        })
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

        /**
         * Create blank message Embed
         * Change to EmberBuilder() in later versions
         */
        let embed = new EmbedBuilder()

        /**
         * If no result show sorry 
         * Else show result
         */
        if(!animeResult){
            embed.setTitle("OOPSIE!!!")
            embed.setDescription("Could not find any animewith that name.\n\nTry searching with another term")
        } else {
            embed.setTitle(animeResult.title.english || animeResult.title.native)
            embed.setDescription(animeResult.description)
            embed.addFields([{
                name: '\u200B',
                value: '\u200B'
            }, {
                name: "Also searched for:",
                value: `${animeResult.title.native}`
            }])
            embed.addFields([
                {
                    name: "__**Episodes:**__",
                    value: `${animeResult.episodes || "0" }`,
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
                    value: animeResult.status || "N/A",
                    inline: true
                }, {
                    name: "**Season**",
                    value: animeResult.season || "N/A",
                    inline: true
                }, {
                    name: "__**Genres:**__",
                    value: ` ${animeResult.genres.join(", ")} `,
                    inline: false
                }
            ])
            embed.setImage(`https://img.anili.st/media/${animeResult.id}`)
            embed.setColor((animeResult.color as ColorResolvable))
        }

        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()

        row.addComponents(new ButtonBuilder()
            .setCustomId(`watchlistadd-${animeResult.id}-${interaction.user.id}`)
            .setLabel("Add to Watchlist")
            .setStyle(ButtonStyle.Success)
        )
        await interaction.editReply({
            embeds: [embed],
            components: [row]
        })
    } catch (err){ console.log(err) }
}