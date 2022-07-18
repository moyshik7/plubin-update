import {
    CommandInteraction,
    ActionRowBuilder,
    SelectMenuBuilder,
    SelectMenuInteraction
} from "discord.js";
import { HelpButtonRow, HelpOptions } from "./helpassets";
import { AnimeHelpEmbed, BaseHelpEmbed, CommandHelpEmbed, NSFWHelpEmbed, WaifuHelpEmbed } from "./helpmessages";

export const HelpCommand = async (
    interaction: CommandInteraction
): Promise<void> => {
    try {
        const HelpSelectRow: ActionRowBuilder<SelectMenuBuilder> = new ActionRowBuilder();

        HelpSelectRow.addComponents(
            new SelectMenuBuilder()
                .addOptions(HelpOptions.cmd)
                .addOptions(HelpOptions.nsfw)
                .addOptions(HelpOptions.anime)
                .addOptions(HelpOptions.waifu)
                .setCustomId(`help-${interaction.user.id}`)
                .setPlaceholder("What do you need help with?")
        );
        interaction.reply({
            embeds: [BaseHelpEmbed],
            components: [HelpSelectRow, HelpButtonRow]
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
                    .setPlaceholder("What do you need help with?")
            );
            interaction.message.edit({
                embeds: [BaseHelpEmbed],
                components: [HelpSelectRow, HelpButtonRow]
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
                    .setPlaceholder("What do you need help with?")
            );
            interaction.message.edit({
                embeds: [NSFWHelpEmbed],
                components: [HelpSelectRow, HelpButtonRow]
            });
            return;
        } else if(value === `help-cmd`) {
            HelpSelectRow.addComponents(
                new SelectMenuBuilder()
                    .addOptions(HelpOptions.home)
                    .addOptions(HelpOptions.nsfw)
                    .addOptions(HelpOptions.anime)
                    .addOptions(HelpOptions.waifu)
                    .setCustomId(`help-${interaction.user.id}`)
                    .setPlaceholder("What do you need help with?")
            );
            interaction.message.edit({
                embeds: [CommandHelpEmbed],
                components: [HelpSelectRow, HelpButtonRow]
            });
            return;
        } else if(value === `help-waifu`) {
            HelpSelectRow.addComponents(
                new SelectMenuBuilder()
                    .addOptions(HelpOptions.home)
                    .addOptions(HelpOptions.cmd)
                    .addOptions(HelpOptions.nsfw)
                    .addOptions(HelpOptions.anime)
                    .setCustomId(`help-${interaction.user.id}`)
                    .setPlaceholder("What do you need help with?")
            );
            interaction.message.edit({
                embeds: [WaifuHelpEmbed],
                components: [HelpSelectRow, HelpButtonRow]
            });
            return;
         }else if(value === `help-anime`) {
            HelpSelectRow.addComponents(
                new SelectMenuBuilder()
                    .addOptions(HelpOptions.home)
                    .addOptions(HelpOptions.cmd)
                    .addOptions(HelpOptions.nsfw)
                    .addOptions(HelpOptions.waifu)
                    .setCustomId(`help-${interaction.user.id}`)
                    .setPlaceholder("What do you need help with?")
            );
            interaction.message.edit({
                embeds: [AnimeHelpEmbed],
                components: [HelpSelectRow, HelpButtonRow]
            });
            return;
        }
    } catch (err) {
        console.log(err);
    }
};
