import {
    CommandInteraction,
    MessageEmbed
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const PoutCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const image = await GetShiroRaw("/images/pout")

        const embed = new MessageEmbed()
            .setTitle(`♥(＾︿＾♡)♥`)
            .setImage(image)
            .setColor("#ff6f61")

        interaction.editReply({
            embeds: [ embed ]
        })
        return;
    } catch(err){ console.log(err) }
}