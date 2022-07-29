import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const PoutCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const image = await GetShiroRaw("/images/pout")

        const embed = new EmbedBuilder()
            .setTitle(`♥(＾︿＾♡)♥`)
            .setImage(image)
            .setColor(0xFF6F61)

        await interaction.editReply({
            embeds: [ embed ]
        })
        return;
    } catch(err){ console.log(err) }
}