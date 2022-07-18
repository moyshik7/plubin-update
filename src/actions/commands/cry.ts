import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const CryCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const image = await GetShiroRaw("/images/cry")

        const embed = new EmbedBuilder()
            .setTitle(`sob sob`)
            .setImage(image)
            .setColor("#ff6f61")

        interaction.editReply({
            embeds: [ embed ]
        })
        return;
    } catch(err){ console.log(err) }
}