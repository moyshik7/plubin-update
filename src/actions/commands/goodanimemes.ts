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


export const GoodAniMemeCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()
        const goodanimemes = await GetRedditPosts("goodanimemes", 5)

        const entity = goodanimemes.data[goodanimemes.data.length - 1 ]

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
                .setCustomId(`goodanimemes-${goodanimemes.after}-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle(ButtonStyle.Success)
        )

        interaction.editReply({
            embeds: [ embed ],
            components: [ row ]
        })
        return;
    } catch(err){ console.log(err) }
}

export const NextGoodAniMemeButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 2){ return }
        const goodanimemes = await GetRedditPosts("goodanimemes", 2, args[0])

        const entity = goodanimemes.data[goodanimemes.data.length - 1 ]

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
                .setCustomId(`goodanimemes-${goodanimemes.after}-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle(ButtonStyle.Success)
        );

        /**
         * Edit the orginal message
         */
        (interaction.message as Message<boolean>).edit({
            embeds: [ embed ],
            components: [ row ]
        })
        return;
    } catch(err){ console.log(err) }
}