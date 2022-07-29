import { CommandInteraction, EmbedBuilder } from "discord.js"

export const Ping = async (interaction: CommandInteraction): Promise<void> => {
    try {
        const time = Date.now() - interaction.createdAt.getTime()

        const embed = new EmbedBuilder()
            .setTitle("Pong")
            .addFields([{
                name: "Websocket:",
                value: `${interaction.client.ws.ping}`,
                inline: true
            }, {
                name: "Latency:",
                value: `${time}`,
                inline: true
            }, {
                name: "Shard:",
                value: `${interaction.guild.shardId}`,
                inline: true
            }, {
                name: "Servers (on this shard):",
                value: `${interaction.client.guilds.cache.size}`,
                inline: true
            }, {
                name: "Memory Usage:",
                value: `${Math.floor(process.memoryUsage().heapUsed / 1000)}`,
                inline: true
            }, {
                name: "Total Memory (for this shard):",
                value: `${Math.floor(process.memoryUsage().heapTotal / 1000)}`,
                inline: true
            }])
            .setColor(0xFF6F61)

        await interaction.reply({
            embeds: [ embed ]
        })
        return;
    } catch (err){ console.log(err) }
}