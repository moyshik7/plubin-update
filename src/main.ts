import dotenv from "dotenv"
dotenv.config()

import { Client, Interaction } from "discord.js"
import { Commands } from "./actions/commands"
import { Buttons } from "./actions/buttons"

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
        /**
         * Command used
         * Chat Input command
         * aka
         * Slah command
         */
        if(interaction.isCommand()){
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
        /**
         * Button press
         */
        if(interaction.isButton()){
            /**
             * Separate arguments
             */
            let args = interaction.customId.split("-")
            if(args.length < 2){
                /**
                 * args.length < 1: No command
                 * args.length < 2: No user id attached.
                 * Not executed
                 */
                interaction.deferUpdate()
                return;
            }
            /**
             * Remove whitespaces
             */
            args = args.map(item => item.trim())

            /**
             * The first argument is the command it
             * Remove it from args array 
             * and store in a new variable
             */
            const name = args.shift()

            /**
             * Create new instance of button press handler class
             */
            const buttonHandler = new Buttons(client, interaction, args)

            /**
             * Get action by name
             */
            let button = buttonHandler[name]

            /**
             * If that button is registered
             */
            if(button){
                /**
                 * Bind button withparent object
                 * So it doesn't lose values
                 */
                button = button.bind(buttonHandler)
                /**
                 * Execute the button
                 */
                button()
            }
            /**
             * Stop the function here
             */
            return;
        }
    } catch (err){ console.log(err) }
})

client.login(process.env.BOT_TOKEN)