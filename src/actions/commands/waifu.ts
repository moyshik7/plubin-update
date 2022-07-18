import {
    ButtonInteraction,
    CommandInteraction,
    Message,
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
    ButtonStyle
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const WaifuCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()
        const entity = await GetShiroRaw("/images/anime")

        const embed = new EmbedBuilder()
            .setTitle("Your Waifu")
            .setImage(entity)
            .setColor("#ff6f61");

        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
        row.addComponents(
            new ButtonBuilder()
                .setLabel("Open in Browser")
                .setStyle(ButtonStyle.Link)
                .setURL(entity)
        )
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`waifu-${interaction.user.id}`)
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

export const NextWaifuButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 1){ return }
        const entity = await GetShiroRaw("/images/anime")

        const embed = new EmbedBuilder()
            .setTitle("Your Waifu")
            .setImage(entity)
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
                .setURL(entity)
        )
        /**
         * Add next button
         */
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`waifu-${interaction.user.id}`)
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