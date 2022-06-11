import { ButtonInteraction, Client } from "discord.js";


export class Buttons {
    private client: Client;
    private interaction: ButtonInteraction;
    private args?: Array<string>

    constructor(client: Client, interaction: ButtonInteraction){
        /**
         * Save client and interaction
         */
        this.client = client
        this.interaction = interaction
        /**
         * Make args
         */
        let args = interaction.customId.split("_")
        if(args.length < 1){
            /**
             * IDK why I'm doing this
             * Like literally why ?
             */
            args = []
        } else {
            /**
             * Remove whitespaces
             */
            args = args.map(item => item.trim())
        }
        this.args = args;
    }
    memes(){}
}