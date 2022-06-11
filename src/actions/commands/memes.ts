import { CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { GetRedditPosts } from "../../reddit";


export const MemeCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()
        const memes = await GetRedditPosts("memes", 5)

        const entity = memes.data[memes.data.length - 1 ]

        const embed = new MessageEmbed()
            .setTitle(entity.title)
            .setImage(entity.image)
            .setColor("#ff6f61")
        const row = new MessageActionRow()
        row.addComponents(
            new MessageButton()
                .setLabel("Open in Browser")
                .setStyle("LINK")
                .setURL(entity.image)
        )
        row.addComponents(
            new MessageButton()
                .setCustomId(`memes_${memes.after}_${interaction.user.id}`)
                .setLabel("Next")
                .setStyle("SUCCESS")
        )

        interaction.editReply({
            embeds: [ embed ],
            components: [ row ]
        })
        return;
    } catch(err){ console.log(err) }
}