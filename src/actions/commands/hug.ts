import {
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { GetShiroRaw } from "../../shiroapi";


export const HugCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        const user = interaction.user;
        const victim = interaction?.options.get("user", false)?.user

        let message: string;

        if(!victim){
            message = `${user.username} tries to hug themself\n(Get a life you lonely freak)`
        } else {
            message = `${user.username} hugs ${victim.username}\nHow cute`
        }

        const image = await GetShiroRaw("/images/hug")

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