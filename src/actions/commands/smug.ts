import {
    CommandInteraction,
    MessageEmbed
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const SmugCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const image = await GetShiroRaw("/images/smug")

        const embed = new MessageEmbed()
            .setTitle(`z z z`)
            .setImage(image)
            .setColor("#ff6f61")

        interaction.editReply({
            embeds: [ embed ]
        })
        return;
    } catch(err){ console.log(err) }
}