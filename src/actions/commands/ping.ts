import { CommandInteraction, MessageEmbed } from "discord.js"

export const Ping = (interaction: CommandInteraction) => {
    try {
        const time = Date.now() - interaction.createdAt.getTime()

        const embed = new MessageEmbed()
            .setTitle("Pong")
            .setDescription(` 
Latency: ${time} ms
Websocket: ${interaction.client.ws.ping} ms`)
            .setColor("#FF6F61")

        interaction.reply({
            embeds: [ embed ]
        })
        return;
    } catch (err){ console.log(err) }
}