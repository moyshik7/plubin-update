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

const getMetaData = require('metadata-scraper')

export const AsianCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        if(!(interaction.channel as TextChannel).nsfw){
            const emb = new MessageEmbed()
                .setTitle("Horni bonk")
                .setImage(process.env.NO_NSFW)
                .setColor("RED")
            interaction.editReply({
                embeds: [emb]
            })
            return;
        }

        const redditRresponse = await GetRedditPosts("asiansgonewild", 5)

        const entity = redditRresponse.data[redditRresponse.data.length - 1 ]

        if(!entity){
            return;
        }

        
        if(/(http|https)\:\/\/(www\.)?redgifs\.com\/watch\/[a-zA-Z]{3,35}(\/)?/g.test(entity.image)){
            const data = await getMetaData(entity.image)
            const embed = new MessageEmbed()
                .setTitle(entity.title)
                .setColor("#ff6f61")
                .setDescription("This is a video");
            const row = new MessageActionRow()
            row.addComponents(
                new MessageButton()
                    .setLabel("Open in Browser")
                    .setStyle("LINK")
                    .setURL(entity.image)
            )
            row.addComponents(
                new MessageButton()
                    .setCustomId(`asian-${redditRresponse.after}-${interaction.user.id}`)
                    .setLabel("Next")
                    .setStyle("SUCCESS")
            )
            interaction.editReply({
                content: `${data.video}`,
                embeds: [embed],
                components: [row]
            })
            return;
        }

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
                .setCustomId(`asian-${redditRresponse.after}-${interaction.user.id}`)
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

export const NextAsianButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 2){ return }

        /**
         * If channel not nsfw show error
         */
        if(!(interaction.channel as TextChannel).nsfw){
            const emb = new MessageEmbed()
                .setTitle("Horni bonk")
                .setImage(process.env.NO_NSFW)
                .setColor("RED")
            interaction.editReply({
                embeds: [emb]
            })
            return;
        }

        const redditRresponse = await GetRedditPosts("asiansgonewild", 2, args[0])

        const entity = redditRresponse.data[redditRresponse.data.length - 1 ]

        if(/(http|https)\:\/\/(www\.)?redgifs\.com\/watch\/[a-zA-Z]{3,35}(\/)?/g.test(entity.image)){
            const data = await getMetaData(entity.image)
            const embed = new MessageEmbed()
                .setTitle(entity.title)
                .setColor("#ff6f61")
                .setDescription("This is a video");
            const row = new MessageActionRow()
            row.addComponents(
                new MessageButton()
                    .setLabel("Open in Browser")
                    .setStyle("LINK")
                    .setURL(entity.image)
            )
            row.addComponents(
                new MessageButton()
                    .setCustomId(`asian-${redditRresponse.after}-${interaction.user.id}`)
                    .setLabel("Next")
                    .setStyle("SUCCESS")
            );
            (interaction.message as Message<boolean>).edit({
                content: `${data.video}`,
                embeds: [embed],
                components: [row]
            })
            return;
        }

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
                .setCustomId(`asian-${redditRresponse.after}-${interaction.user.id}`)
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