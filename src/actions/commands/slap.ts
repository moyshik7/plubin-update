import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const SlapCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const user = interaction.user;
        const victim = interaction?.options.get("user", false)?.user;

        let message: string;

        if(!victim || (victim.id === user.id)){
            message = `${user.username} slaps themself\nNow everyone avoids them`
        } else {
            message = `${user.username} slaps ${victim.username}\nBaaaaaaaaaaaaaaaaaaaaaaaaka!!!`
        }

        const image = await GetShiroRaw("/images/slap")

        const embed = new EmbedBuilder()
            .setDescription(message)
            .setImage(image)
            .setColor(0xFF6F61)

        await interaction.editReply({
            embeds: [ embed ]
        })
        return;
    } catch(err){ console.log(err) }
}