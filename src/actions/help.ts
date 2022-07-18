import {
    CommandInteraction,
    ActionRowBuilder,
    SelectMenuBuilder,
    SelectMenuInteraction
} from "discord.js";
import { HelpOptions } from "./helpassets";
import { BaseHelpEmbed } from "./helpmessages";

export const HelpCommand = async (
    interaction: CommandInteraction
): Promise<void> => {
    try {
        const HelpSelectRow: ActionRowBuilder<SelectMenuBuilder> =
            new ActionRowBuilder();

        HelpSelectRow.addComponents(
            new SelectMenuBuilder()
                .addOptions(HelpOptions.cmd)
                .addOptions(HelpOptions.nsfw)
                .addOptions(HelpOptions.anime)
                .addOptions(HelpOptions.waifu)
                .setCustomId(`help-${interaction.user.id}`)
                .setPlaceholder("What do yoou need help with?")
        );
        interaction.reply({
            embeds: [BaseHelpEmbed],
            components: [HelpSelectRow]
        });
    } catch (err) {
        console.log(err);
    }
};

export const HelpSelectCommand = async (
    interaction: SelectMenuInteraction
): Promise<void> => {
    try {
        const value = interaction.values[0];
        if (!value) {
            return;
        }
        await interaction.deferUpdate();

        /**
         * The dropdown row
         */
        const HelpSelectRow: ActionRowBuilder<SelectMenuBuilder> =new ActionRowBuilder();
        if(value === `help-home`) {
            HelpSelectRow.addComponents(
                new SelectMenuBuilder()
                    .addOptions(HelpOptions.cmd)
                    .addOptions(HelpOptions.nsfw)
                    .addOptions(HelpOptions.anime)
                    .addOptions(HelpOptions.waifu)
                    .setCustomId(`help-${interaction.user.id}`)
                    .setDisabled(false)
                    .setPlaceholder("What do yoou need help with?")
            );
            interaction.message.edit({
                embeds: [BaseHelpEmbed],
                components: [HelpSelectRow]
            });
            return;
        } else if(value === `help-nsfw`) {
            HelpSelectRow.addComponents(
                new SelectMenuBuilder()
                    .addOptions(HelpOptions.home)
                    .addOptions(HelpOptions.cmd)
                    .addOptions(HelpOptions.anime)
                    .addOptions(HelpOptions.waifu)
                    .setCustomId(`help-${interaction.user.id}`)
                    .setDisabled(false)
                    .setPlaceholder("What do yoou need help with?")
            );
            interaction.message.edit({
                components: [HelpSelectRow]
            });
            return;
        }
    } catch (err) {
        console.log(err);
    }
};
