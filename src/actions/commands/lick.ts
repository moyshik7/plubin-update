import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const LickCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const user = interaction.user;
        const victim = interaction?.options.get("user", false)?.user;

        let message: string;

        if(!victim || (victim.id === user.id)){
            message = `${user.username} licks themself\n(are you a cat?)`
        } else {
            message = `${user.username} licks ${victim.username}\nNow ${victim.username} smells like fish`
        }

        const image = await GetShiroRaw("/images/lick")

        const embed = new EmbedBuilder()
            .setDescription(message)
            .setImage(image)
            .setColor("#ff6f61")

        await interaction.editReply({
            embeds: [ embed ]
        })
        return;
    } catch(err){ console.log(err) }
}