import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SelectMenuOptionBuilder } from "discord.js";

const HelpButtonRow: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
HelpButtonRow.addComponents(new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setURL("https://plubin.xyz/invite")
    .setLabel("Invite")
)
HelpButtonRow.addComponents(new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.gg/UDZqY4xJ6J")
    .setLabel("Support Server")
)
HelpButtonRow.addComponents(new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setURL("https://plubin.xyz/")
    .setLabel("Website")
)
HelpButtonRow.addComponents(new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setURL("https://top.gg/bot/748160981766635540/vote")
    .setLabel("Vote")
)

const HomeOption = new SelectMenuOptionBuilder()
    .setLabel(`Home`)
    .setValue(`help-home`)
    .setDescription(`Where you came from`);
const CommandOption = new SelectMenuOptionBuilder()
    .setLabel(`Command List`)
    .setValue(`help-cmd`)
    .setDescription(`Can't remember all the commands? No-one is expecting you to`);
const NSFWOption = new SelectMenuOptionBuilder()
    .setLabel(`NSFW Commands`)
    .setValue(`help-nsfw`)
    .setDescription(`Incognito mode on`);
const WaifuOption = new SelectMenuOptionBuilder()
    .setLabel(`Waifu Features`)
    .setValue(`help-waifu`)
    .setDescription(`Having trouble with your waifu? We got you covered`);
const AnimeOption = new SelectMenuOptionBuilder()
    .setLabel(`Anime Features`)
    .setValue(`help-anime`)
    .setDescription(`Help about the anime / manga featues and wishlist system`);


export const HelpOptions = {
    home: HomeOption,
    cmd: CommandOption,
    nsfw: NSFWOption,
    waifu: WaifuOption,
    anime: AnimeOption
}

export { HelpButtonRow }