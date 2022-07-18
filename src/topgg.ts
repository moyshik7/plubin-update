import { Api } from "@top-gg/sdk"
import { Client } from "discord.js"

const api = new Api(process.env.TOPGG_API)

export const TopggStatusHandler = (client: Client): void => {
    try {
        setInterval(() => {
        try {
            if(process.env.PRODUCTION !== "T"){
                /**
                 * Don't post status for demo bot
                 */
                console.log(client.guilds.cache.size)
                return;
            }
            api.postStats({
                serverCount: client.guilds.cache.size
            }).then((stats) => {
                console.log(`Posted status on top.gg Servers: ${stats.serverCount}`)
            }).catch(console.log)
        }catch(err){console.log(err)}
        }, 30 * 60 * 1000)
    } catch (err){
        console.log(err)
    }
}