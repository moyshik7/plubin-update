import dotenv from "dotenv"
dotenv.config()

import { Client, Interaction } from "discord.js"

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log("Bot ready")
})

client.on("interactionCreate", (interaction: Interaction): void => {
    try {
        if(interaction.isCommand()){
            /**
             * Command use
             */
            if(interaction.commandName === "help"){
                interaction.reply("no")
                return;
            }
        }
        if(interaction.isButton()){
            /**
             * Button press
             */
        }
    } catch (err){ console.log(err) }
})

client.login(process.env.BOT_TOKEN)