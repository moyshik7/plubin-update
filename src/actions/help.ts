import {
    CommandInteraction,
    ActionRowBuilder,
    SelectMenuBuilder,
    SelectMenuOptionBuilder
} from "discord.js";
import { BaseHelpEmbed } from "./helpmessages";

export const HelpCommand = async (
  interaction: CommandInteraction
): Promise<void> => {
  try {
    const HelpSelectRow: ActionRowBuilder<SelectMenuBuilder> = new ActionRowBuilder();

    HelpSelectRow.addComponents(
      new SelectMenuBuilder()
        .addOptions(
          new SelectMenuOptionBuilder()
            .setLabel(`Home`)
            .setValue(`help_home`)
            .setDescription(`Where you came from`)
        )
        .addOptions(
          new SelectMenuOptionBuilder()
            .setLabel(`Command List`)
            .setValue(`help_cmd`)
            .setDescription(
              `can't remember all the commands? No-one is expecting you to`
            )
        )
        .addOptions(
          new SelectMenuOptionBuilder()
            .setLabel(`NSFW Commands`)
            .setValue(`help_nsfw`)
            .setDescription(`Incognito mode on`)
        )
        .addOptions(
          new SelectMenuOptionBuilder()
            .setLabel(`Waifu Features`)
            .setValue(`help_waifu`)
            .setDescription(
              `Having trouble with your waifu? We got you covered`
            )
        )
        .addOptions(
          new SelectMenuOptionBuilder()
            .setLabel(`Anime Features`)
            .setValue(`help_waifu`)
            .setDescription(
              `Help about the anime / manga featues and wishlist system`
            )
        )
    );
    interaction.reply({
      embeds: [BaseHelpEmbed],
      components: [HelpSelectRow]
    });
  } catch (err) {
    console.log(err);
  }
};
