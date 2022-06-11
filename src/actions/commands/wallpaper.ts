import { ButtonInteraction, CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { GetRedditPosts } from "../../reddit";


export const WallpaperCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()
        const wallpapers = await GetRedditPosts("animewallpaper", 5)

        const entity = wallpapers.data[wallpapers.data.length - 1 ]

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
                .setCustomId(`wallpapers-${wallpapers.after}-${interaction.user.id}`)
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

export const NextWallpaperButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 2){ return }
        const wallpapers = await GetRedditPosts("animewallpaper", 2, args[0])

        const entity = wallpapers.data[wallpapers.data.length - 1 ]

        const embed = new MessageEmbed()
            .setTitle(entity.title)
            .setImage(entity.image)
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
                .setCustomId(`wallpapers-${wallpapers.after}-${interaction.user.id}`)
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