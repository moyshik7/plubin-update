import { ButtonInteraction, Client } from "discord.js";
import { NextDankMemeButton } from "./commands/dank";

import { NextMemeButton } from "./commands/memes";


export class Buttons {
    private client: Client;
    private interaction: ButtonInteraction;
    private args: Array<string>

    constructor(client: Client, interaction: ButtonInteraction, args: Array<string>){
        /**
         * Save client and interaction
         */
        this.client = client
        this.interaction = interaction
        this.args = args;
    }

    dank(){
        NextDankMemeButton(this.interaction, this.args)
    }
    memes(){
        NextMemeButton(this.interaction, this.args)
    }
}