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
import { GetShiroRaw } from "../../shiroapi";


export const NekoCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        if(!(interaction.channel as TextChannel).nsfw){
            const entity = await GetShiroRaw("/images/neko")
            const embed = new MessageEmbed()
                .setTitle("nya~~")
                .setImage(entity)
                .setColor("#ff6f61");
            const row = new MessageActionRow()
            row.addComponents(
                new MessageButton()
                    .setLabel("Open in Browser")
                    .setStyle("LINK")
                    .setURL(entity)
            )
            row.addComponents(
                new MessageButton()
                    .setCustomId(`nekosfw-${interaction.user.id}`)
                    .setLabel("Next")
                    .setStyle("SUCCESS")
            )
            interaction.editReply({
                embeds: [embed],
                components: [row]
            })
            return;
        }

        const redditRresponse = await GetRedditPosts("nekohentai", 5)

        const entity = redditRresponse.data[redditRresponse.data.length - 1 ]

        const embed = new MessageEmbed()
            .setTitle(entity.title)
            .setImage(entity.image)
            .setColor("#ff6f61");
        
        const row = new MessageActionRow()
        row.addComponents(
            new MessageButton()
                .setLabel("Open in Browser")
                .setStyle("LINK")
                .setURL(entity.image)
        )
        row.addComponents(
            new MessageButton()
                .setCustomId(`neko-${redditRresponse.after}-${interaction.user.id}`)
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

export const NextNekoButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 1){ return }

         if(!(interaction.channel as TextChannel).nsfw){
            const entity = await GetShiroRaw("/images/neko")
            const embed = new MessageEmbed()
                .setTitle("nya~~")
                .setImage(entity)
                .setColor("#ff6f61");
            const row = new MessageActionRow()
            row.addComponents(
                new MessageButton()
                    .setLabel("Open in Browser")
                    .setStyle("LINK")
                    .setURL(entity)
            )
            row.addComponents(
                new MessageButton()
                    .setCustomId(`nekosfw-${interaction.user.id}`)
                    .setLabel("Next")
                    .setStyle("SUCCESS")
            );
            (interaction.message as Message<boolean>).edit({
                embeds: [embed],
                components: [row]
            })
            return;
        }

        const redditRresponse = await GetRedditPosts("nekohentai", 2, args[0])

        const entity = redditRresponse.data[redditRresponse.data.length - 1 ]

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
                .setCustomId(`neko-${redditRresponse.after}-${interaction.user.id}`)
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
export const NextSFWNekoButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        const entity = await GetShiroRaw("/images/neko")
        const embed = new MessageEmbed()
            .setTitle("nya~~")
            .setImage(entity)
            .setColor("#ff6f61");
        const row = new MessageActionRow()
        row.addComponents(
            new MessageButton()
                .setLabel("Open in Browser")
                .setStyle("LINK")
                .setURL(entity)
        )
        row.addComponents(
            new MessageButton()
                .setCustomId(`nekosfw-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle("SUCCESS")
        );
        (interaction.message as Message<boolean>).edit({
            embeds: [embed],
            components: [row]
        })
        return;
    } catch(err){ console.log(err) }
}