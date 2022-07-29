import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const KissCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const user = interaction.user;
        const victim = interaction?.options.get("user", false)?.user;

        let message: string;

        if(!victim){
            message = `${user.username} tries to kiss themself\n(ayo wtf)`
        } else {
            message = `${user.username} kisses ${victim.username}\nCan you not do in public`
        }

        const image = await GetShiroRaw("/images/kiss")

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