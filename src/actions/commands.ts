import { Client, CommandInteraction } from "discord.js";
import { Ping } from "./commands/ping";

export class Commands {
    private client: Client;
    private interaction: CommandInteraction;
    
    constructor(client: Client, interaction: CommandInteraction){
        this.client = client;
        this.interaction = interaction;
    }
    help(){
        this.interaction.reply("Ask your mom for help")
    }
    ping(){
        Ping(this.interaction)
    }
}