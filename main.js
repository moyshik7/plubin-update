import dotenv from "dotenv"
dotenv.config()

import { Client, CommandInteractionOptionResolver } from "discord.js"

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log("Bot ready")
})

client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        /**
         * Command use
         */
        if(interaction.commandName === "help"){
            return interaction.reply("no")
        }
    }
    if(interaction.isButton()){
        /**
         * Button press
         */
    }
})

client.login(process.env.BOT_TOKEN)