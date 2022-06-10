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
    try {
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
    } catch (err){ console.log(err) }
})

client.login(process.env.BOT_TOKEN)