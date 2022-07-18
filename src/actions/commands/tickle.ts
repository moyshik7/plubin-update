import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const TickleCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const user = interaction.user;
        const victim = interaction?.options.get("user", false)?.user;

        let message: string;

        if(!victim || (victim.id === user.id)){
            message = `${user.username} tickles themself/nNoone laughed`
        } else {
            message = `${user.username} tickles ${victim.username}\n${victim.username} dies from laughter`
        }

        const image = await GetShiroRaw("/images/tickle")

        const embed = new EmbedBuilder()
            .setDescription(message)
            .setImage(image)
            .setColor("#ff6f61")

        interaction.editReply({
            embeds: [ embed ]
        })
        return;
    } catch(err){ console.log(err) }
}