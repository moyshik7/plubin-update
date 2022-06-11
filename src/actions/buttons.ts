import { ButtonInteraction, Client } from "discord.js";


export class Buttons {
    private client: Client;
    private interaction: ButtonInteraction;
    private args?: Array<string>

    constructor(client: Client, interaction: ButtonInteraction, args: Array<string>){
        /**
         * Save client and interaction
         */
        this.client = client
        this.interaction = interaction
        this.args = args;
    }
    memes(){}
}