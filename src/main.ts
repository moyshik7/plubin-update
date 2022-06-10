import dotenv from "dotenv"
dotenv.config()

import { Client, Interaction } from "discord.js"
import { Commands } from "./actions/commands"

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
             * Command used
             * Chat Input command
             * aka
             * Slah command
             */

            /**
             * Create new instance of commandhandler class
             */
            const commandsCollector = new Commands(client, interaction)
            /**
             * Get the command by name
             */
            let command = commandsCollector[interaction.commandName]
            /**
             * If commands exists,
             * Execute it
             * Else 
             * Leave it
             */
            if(command){
                /**
                 * Bind the parent class
                 */
                command = command.bind(commandsCollector)
                /**
                 * Execute command
                 */
                command()
            }
            /**
             * Stop the function here
             */
            return;
        }
        if(interaction.isButton()){
            /**
             * Button press
             */
        }
    } catch (err){ console.log(err) }
})

client.login(process.env.BOT_TOKEN)