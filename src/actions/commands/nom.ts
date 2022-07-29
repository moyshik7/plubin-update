import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const NomCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const image = await GetShiroRaw("/images/nom")

        const embed = new EmbedBuilder()
            .setTitle(`nom nom`)
            .setImage(image)
            .setColor("#ff6f61")

        await interaction.editReply({
            embeds: [ embed ]
        })
        return;
    } catch(err){ console.log(err) }
}