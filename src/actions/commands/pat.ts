import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const PatCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const user = interaction.user;
        const victim = interaction?.options.get("user", false)?.user;

        let message: string;

        if(!victim || (victim.id === user.id)){
            message = `${user.username} tries to pat themself\n(Get some friends you damn loner)`
        } else {
            message = `${user.username} pats ${victim.username}\n${victim.username} is blushing`
        }

        const image = await GetShiroRaw("/images/pat")

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