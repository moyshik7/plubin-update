import { EmbedBuilder } from "@discordjs/builders"
import { HelpMessageType } from "../types"

const BaseHelpmessage: HelpMessageType = {
    title: `Plubin`,
    message: `Your favourite anime, meme and image bot. Create memes share with your friends, search anime and manage your watchlist, collect and interact with your waifu and many more.\n\n
[Invite me to get started in your server](https://plubin.xyz/invite/)\n
[Vote me on top.gg to show support](https://top.gg/bot/748160981766635540)\n\n

For a list of commands select "Command List" from the dropdown
For a list of NSFW commands select "NSFW Commands" from the dropdown

To get help about waifu drops and currency features select "Help with Waifu" from the dropdown

Still need help? Join our [support server](https://discord.gg/UDZqY4xJ6J) and ask for help. Don't be shy`
}

export const NSFWHelpMessage = ``

export const HelpMessages = {
    BaseHelpmessage: BaseHelpmessage,
    NSFWHelpMessage: NSFWHelpMessage
}

const BaseHelpEmbed = new EmbedBuilder()
    .setTitle(BaseHelpmessage.title)
    .setDescription(BaseHelpmessage.message)
    .setColor(0xff6f61);
export { BaseHelpEmbed }