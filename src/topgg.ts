import { Api, BotStats } from "@top-gg/sdk"
import { Client } from "discord.js"

const api = new Api(process.env.TOPGG_API)

export const TopggStatusHandler = (client: Client): void => {
    try {
        if(process.env.PRODUCTION === "N"){
            PostTopggStats(client).catch(console.log)
        }
        setInterval(() => {
        try {
            if(process.env.PRODUCTION !== "N"){
                /**
                 * Don't post status for demo bot
                 */
                console.log(client.guilds.cache.size)
                return;
            }
            PostTopggStats(client)
                .then((stats) => {
                    console.log(`Posted status on top.gg Servers: ${stats.serverCount}`)
                })
                .catch(console.log)
        }catch(err){console.log(err)}
        }, 30 * 60 * 1000)
    } catch (err){
        console.log(err)
    }
}

export const PostTopggStats = (client: Client): Promise<BotStats> => {
    return new Promise((resolve, reject) => {
        api.postStats({
            serverCount: client.guilds.cache.size
        }).then(resolve).catch(reject)
    })
}