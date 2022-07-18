import { EmbedBuilder } from "@discordjs/builders"
import { HelpMessageType } from "../types"

const BaseHelpmessage  = `Your favourite anime, meme and image bot. Create memes share with your friends, search anime and manage your watchlist, collect and interact with your waifu and many more.\n\n
[Invite me to get started in your server](https://plubin.xyz/invite/)\n
[Vote me on top.gg to show support](https://top.gg/bot/748160981766635540)\n\n

For a list of commands select "Command List" from the dropdown
For a list of NSFW commands select "NSFW Commands" from the dropdown

To get help about waifu drops and currency features select "Help with Waifu" from the dropdown

Still need help? Join our [support server](https://discord.gg/UDZqY4xJ6J) and ask for help. Don't be shy`

let NSFWMessages = ""
NSFWMessages += "For you convinience we decided to split the commands in  multiple categories."
NSFWMessages += "A complete version of these commands with detailed usage is available on [our website](https://plubin.xyz/nsfw/)\n"
NSFWMessages += "Note: **All commands have been switched to slash commands** "
NSFWMessages += "[Learn more about slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ)\n\n\n"
NSFWMessages += "**2D / Anime** \n\n"
NSFWMessages += "`oppai`  `hentai`  `tentacles`  `yuri`  `yaoi`  `femdom`  `futa`  `neko`\n\n\n"
NSFWMessages += "**3D / IRL** \n\n"
NSFWMessages += "`anal`  `ass`  `blowjob`  `boobs`  `milf`  `mom`  `pussy`  `thicc`  `bondage`  `vanila`  `cumslut`  `feet`  `glasses`  `heels`  "
NSFWMessages += "`longhair`  `oil`  `orgasm`  `pawg`  `shorthair`  `spank`  `tan`  `tiny`\n\n\n"
NSFWMessages += "**Occational** \n\n"
NSFWMessages += "`xmas`  `halloween`\n\n\n"
NSFWMessages += "**Race** \n\n"
NSFWMessages += "`asian`  `black`  `blonde`  `filipino`  `indian`  `japanese`  `korean`  `redhead`"

let CommandHelpMessage = ""
CommandHelpMessage += "For you convinience we decided to split the commands in  multiple categories."
CommandHelpMessage += "A complete version of these commands with detailed usage is available on [our website](https://plubin.xyz/commands/)\n"
CommandHelpMessage += "Note: **All commands have been switched to slash commands** "
CommandHelpMessage += "[Learn more about slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ)\n\n\n"
CommandHelpMessage += "**Anime**\n"
CommandHelpMessage += "`anime` `manga` `waifu` `animeme` `goodanimeme` `wholesomehentai` `catgirl` `foxgirl` `watchlist`\n\n\n"
CommandHelpMessage += "**Memes**\n"
CommandHelpMessage += "`meme` `dank` `animemes` `goodanimemes`\n\n\n"
CommandHelpMessage += "**Emotions**\n"
CommandHelpMessage += "`pat` `poke` `tickle` `punch` `pout` `slap` `nom` `lick` `kiss` `hug` `cry` `blush` `sleep` `smug`"

const BaseHelpEmbed = new EmbedBuilder()
    .setTitle("Plubin")
    .setDescription(BaseHelpmessage)
    .setColor(0xff6f61);
const NSFWHelpEmbed = new EmbedBuilder()
    .setTitle("NSFW Commands")
    .setDescription(NSFWMessages)
    .setColor(0xff6f61);
const CommandHelpEmbed = new EmbedBuilder()
    .setTitle("Command List")
    .setDescription(CommandHelpMessage)
    .setColor(0xff6f61);
export { BaseHelpEmbed, NSFWHelpEmbed, CommandHelpEmbed }