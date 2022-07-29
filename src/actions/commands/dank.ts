import {
    ButtonInteraction, 
    CommandInteraction, 
    Message, 
    ActionRowBuilder, 
    ButtonBuilder, 
    EmbedBuilder, 
    TextChannel,
    ButtonStyle
} from "discord.js";
import { GetRedditPosts } from "../../reddit";


export const DankMemeCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()
        const dank = await GetRedditPosts("dankmemes", 10)

        const entity = dank.data[dank.data.length - 1]

        const nsfw = (entity.nsfw && !(interaction.channel as TextChannel).nsfw)

        const embed = new EmbedBuilder()
            .setTitle(entity.title)
            .setImage(nsfw ? process.env.NO_NSFW : entity.image)
            .setColor("#ff6f61")
        
        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
        row.addComponents(
            new ButtonBuilder()
                .setLabel("Open in Browser")
                .setStyle(ButtonStyle.Link)
                .setURL(entity.image)
        )
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`dank-${dank.after}-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle(ButtonStyle.Success)
        )

        await interaction.editReply({
            embeds: [ embed ],
            components: [ row ]
        }).catch(console.log)
        return;
    } catch(err){ console.log(err) }
}

export const NextDankMemeButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 2){ return }
        const dank = await GetRedditPosts("dankmemes", 2, args[0])

        const entity = dank.data[dank.data.length - 1 ]

        const nsfw = (entity.nsfw && !(interaction.channel as TextChannel).nsfw)

        const embed = new EmbedBuilder()
            .setTitle(entity.title)
            .setImage(nsfw ? process.env.NO_NSFW : entity.image)
            .setColor("#ff6f61")
        
        /**
         * Declare the button row
         */
        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
        /**
         * Add open in browser button
         */
        row.addComponents(
            new ButtonBuilder()
                .setLabel("Open in Browser")
                .setStyle(ButtonStyle.Link)
                .setURL(entity.image)
        )
        /**
         * Add next button
         */
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`dank-${dank.after}-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle(ButtonStyle.Success)
        );

        /**
         * Edit the orginal message
         */
        await (interaction.message as Message<boolean>).edit({
            embeds: [ embed ],
            components: [ row ]
        })
        return;
    } catch(err){ console.log(err) }
}