import {
    ButtonInteraction, 
    CommandInteraction, 
    Message, 
    ActionRowBuilder, 
    ButtonBuilder, 
    EmbedBuilder, 
    TextChannel,
    ButtonStyle,
    Colors
} from "discord.js";
import { GetRedditPosts } from "../../reddit";

const getMetaData = require('metadata-scraper')


export const BlackCommand = async (interaction: CommandInteraction): Promise<void> => {
    try {
        await interaction.deferReply()

        if(!(interaction.channel as TextChannel).nsfw){
            const emb = new EmbedBuilder()
                .setTitle("Horni bonk")
                .setImage(process.env.NO_NSFW)
                .setColor(Colors.Red)
            await interaction.editReply({
                embeds: [emb]
            })
            return;
        }

        const redditRresponse = await GetRedditPosts("blackchickswhitedicks", 5)

        const entity = redditRresponse.data[redditRresponse.data.length - 1 ]

        if(/(http|https)\:\/\/(www\.)?redgifs\.com\/watch\/[a-zA-Z]{3,35}(\/)?/g.test(entity.image)){
            const data = await getMetaData(entity.image)
            const embed = new EmbedBuilder()
                .setTitle(entity.title)
                .setColor(0xFF6F61)
                .setDescription("This is a video")
                .setImage(data.image)
            const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
            row.addComponents(
                new ButtonBuilder()
                    .setLabel("Watch in Browser")
                    .setStyle(ButtonStyle.Link)
                    .setURL(data.video || entity.image)
            )
            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`black-${redditRresponse.after}-${interaction.user.id}`)
                    .setLabel("Next")
                    .setStyle(ButtonStyle.Success)
            )
            await interaction.editReply({
                embeds: [embed],
                components: [row],
                files: []
            })
            return;
        }

        const embed = new EmbedBuilder()
            .setTitle(entity.title)
            .setImage(entity.image)
            .setColor(0xFF6F61)
        
        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
        row.addComponents(
            new ButtonBuilder()
                .setLabel("Open in Browser")
                .setStyle(ButtonStyle.Link)
                .setURL(entity.image)
        )
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`black-${redditRresponse.after}-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle(ButtonStyle.Success)
        )

        await interaction.editReply({
            embeds: [ embed ],
            components: [ row ],
            files: []
        })
        return;
    } catch(err){ console.log(err) }
}

export const NextBlackButton = async (interaction: ButtonInteraction, args: Array<string>): Promise<void> => {
    try {
        await interaction.deferUpdate()
        if(args.length < 2){ return }

        /**
         * If channel not nsfw show error
         */
        if(!(interaction.channel as TextChannel).nsfw){
            const emb = new EmbedBuilder()
                .setTitle("Horni bonk")
                .setImage(process.env.NO_NSFW)
                .setColor(Colors.Red)
            await interaction.editReply({
                embeds: [emb]
            })
            return;
        }

        const redditRresponse = await GetRedditPosts("blackchickswhitedicks", 2, args[0])

        const entity = redditRresponse.data[redditRresponse.data.length - 1 ]

        if(/(http|https)\:\/\/(www\.)?redgifs\.com\/watch\/[a-zA-Z]{3,35}(\/)?/g.test(entity.image)){
            const data = await getMetaData(entity.image)
            const embed = new EmbedBuilder()
                .setTitle(entity.title)
                .setColor(0xFF6F61)
                .setDescription("[This is a video]")
                .setImage(data.image)
            const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
            row.addComponents(
                new ButtonBuilder()
                    .setLabel("Watch in Browser")
                    .setStyle(ButtonStyle.Link)
                    .setURL(data.video || entity.image)
            )
            row.addComponents(
                new ButtonBuilder()
                    .setCustomId(`black-${redditRresponse.after}-${interaction.user.id}`)
                    .setLabel("Next")
                    .setStyle(ButtonStyle.Success)
            );
            await (interaction.message as Message<boolean>).edit({
                embeds: [embed],
                components: [row],
                files: []
            })
            return;
        }

        const embed = new EmbedBuilder()
            .setTitle(entity.title)
            .setImage(entity.image)
            .setColor(0xFF6F61);

        /**
         * Declare the button row
         */
        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder()
        /**
         * Add open in browser button
         */
        row.addComponents(
            new ButtonBuilder()
                .setLabel("Open in Browser")
                .setStyle(ButtonStyle.Link)
                .setURL(entity.image)
        )
        /**
         * Add next button
         */
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(`black-${redditRresponse.after}-${interaction.user.id}`)
                .setLabel("Next")
                .setStyle(ButtonStyle.Success)
        );

        /**
         * Edit the orginal message
         */
        await (interaction.message as Message<boolean>).edit({
            embeds: [ embed ],
            components: [ row ],
            files: []
        })
        return;
    } catch(err){ console.log(err) }
}