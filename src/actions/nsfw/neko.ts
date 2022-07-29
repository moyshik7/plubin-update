import {
    ButtonInteraction, 
    CommandInteraction, 
    Message, 
    ActionRowBuilder, 
    ButtonBuilder, 
    EmbedBuilder, 
    TextChannel,
    ButtonStyle,
    Colors
} from "discord.js";
import { GetRedditPosts } from "../../reddit";
import { GetShiroRaw } from "../../shiroapi";


export const NekoCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        if(!(interaction.channel as TextChannel).nsfw){
            const entity = await GetShiroRaw("/images/neko")
            const embed = new EmbedBuilder()
                .setTitle("nya~~")
                .setImage(entity)
                .setColor(0xFF6F61);
            const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
            row.addComponents(
                new ButtonBuilder()
                    .setLabel("Open in Browser")
                    .setStyle(ButtonStyle.Link)
                    .setURL(entity)
            )
            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`nekosfw-${interaction.user.id}`)
                    .setLabel("Next")
                    .setStyle(ButtonStyle.Success)
            )
            interaction.editReply({
                embeds: [embed],
                components: [row]
            })
            return;
        }

        const redditRresponse = await GetRedditPosts("nekohentai", 5)

        const entity = redditRresponse.data[redditRresponse.data.length - 1 ]

        const embed = new EmbedBuilder()
            .setTitle(entity.title)
            .setImage(entity.image)
            .setColor(0xFF6F61);
        
        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
        row.addComponents(
            new ButtonBuilder()
                .setLabel("Open in Browser")
                .setStyle(ButtonStyle.Link)
                .setURL(entity.image)
        )
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`neko-${redditRresponse.after}-${interaction.user.id}`)
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

export const NextNekoButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()

         if(!(interaction.channel as TextChannel).nsfw){
            const entity = await GetShiroRaw("/images/neko")
            const embed = new EmbedBuilder()
                .setTitle("nya~~")
                .setImage(entity)
                .setColor(0xFF6F61);
            const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
            row.addComponents(
                new ButtonBuilder()
                    .setLabel("Open in Browser")
                    .setStyle(ButtonStyle.Link)
                    .setURL(entity)
            )
            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`nekosfw-${interaction.user.id}`)
                    .setLabel("Next")
                    .setStyle(ButtonStyle.Success)
            );
            (interaction.message as Message<boolean>).edit({
                embeds: [embed],
                components: [row]
            })
            return;
        }

        
        if(args.length < 2){ return }

        const redditRresponse = await GetRedditPosts("nekohentai", 2, args[0])

        const entity = redditRresponse.data[redditRresponse.data.length - 1 ]

        const embed = new EmbedBuilder()
            .setTitle(entity.title)
            .setImage(entity.image)
            .setColor(0xFF6F61)

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
                .setCustomId(`neko-${redditRresponse.after}-${interaction.user.id}`)
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
export const NextSFWNekoButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        const entity = await GetShiroRaw("/images/neko")
        const embed = new EmbedBuilder()
            .setTitle("nya~~")
            .setImage(entity)
            .setColor(0xFF6F61);
        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
        row.addComponents(
            new ButtonBuilder()
                .setLabel("Open in Browser")
                .setStyle(ButtonStyle.Link)
                .setURL(entity)
        )
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`nekosfw-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle(ButtonStyle.Success)
        );
        (interaction.message as Message<boolean>).edit({
            embeds: [embed],
            components: [row]
        })
        return;
    } catch(err){ console.log(err) }
}