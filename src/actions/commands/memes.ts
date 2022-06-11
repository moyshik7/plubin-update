import {
    ButtonInteraction, 
    CommandInteraction, 
    Message, 
    MessageActionRow, 
    MessageButton, 
    MessageEmbed, 
    TextChannel 
} from "discord.js";
import { GetRedditPosts } from "../../reddit";


export const MemeCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()
        const memes = await GetRedditPosts("memes", 5)

        const entity = memes.data[memes.data.length - 1 ]

        const nsfw = (entity.nsfw && !(interaction.channel as TextChannel).nsfw)

        const embed = new MessageEmbed()
            .setTitle(entity.title)
            .setImage(nsfw ? process.env.NO_NSFW : entity.image)
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
                .setCustomId(`memes-${memes.after}-${interaction.user.id}`)
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

export const NextMemeButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 2){ return }
        const memes = await GetRedditPosts("memes", 2, args[0])

        const entity = memes.data[memes.data.length - 1 ]

        const nsfw = (entity.nsfw && !(interaction.channel as TextChannel).nsfw)

        const embed = new MessageEmbed()
            .setTitle(entity.title)
            .setImage(nsfw ? process.env.NO_NSFW : entity.image)
            .setColor("#ff6f61")
        
        /**
         * Declare the button row
         */
        const row = new MessageActionRow()
        /**
         * Add open in browser button
         */
        row.addComponents(
            new MessageButton()
                .setLabel("Open in Browser")
                .setStyle("LINK")
                .setURL(entity.image)
        )
        /**
         * Add next button
         */
        row.addComponents(
            new MessageButton()
                .setCustomId(`memes-${memes.after}-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle("SUCCESS")
        );

        /**
         * Edit the orginal message
         */
        (interaction.message as Message<boolean>).edit({
            embeds: [ embed ],
            components: [ row ]
        })
        return;
    } catch(err){ console.log(err) }
}