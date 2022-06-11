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


export const AniMemeCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()
        const animemes = await GetRedditPosts("animemes", 5)

        const entity = animemes.data[animemes.data.length - 1 ]

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
                .setCustomId(`animemes-${animemes.after}-${interaction.user.id}`)
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

export const NextAniMemeButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 2){ return }
        const animemes = await GetRedditPosts("animemes", 2, args[0])

        const entity = animemes.data[animemes.data.length - 1 ]

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
                .setCustomId(`animemes-${animemes.after}-${interaction.user.id}`)
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