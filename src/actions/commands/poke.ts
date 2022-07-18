import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const PokeCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const user = interaction.user;
        const victim = interaction?.options.get("user", false)?.user;

        let message: string;

        if(!victim || (victim.id === user.id)){
            message = `${user.username} just because you can doesn't mean you have to do it`
        } else {
            message = `${user.username} keeps poking ${victim.username}\n${victim.username} is getting annoyed`
        }

        const image = await GetShiroRaw("/images/poke")

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