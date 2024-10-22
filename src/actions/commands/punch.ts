import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const PunchCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const user = interaction.user;
        const victim = interaction?.options.get("user", false)?.user;

        let message: string;

        if(!victim || (victim.id === user.id)){
            message = `${user.username} tries to be Ariana Granade and punched themself\nIt was nothing like he expected`
        } else {
            message = `${user.username} punched ${victim.username} out of the universe\nAnd alien took pity on ${victim.username} and dropped them on Earth`
        }

        const image = await GetShiroRaw("/images/punch")

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