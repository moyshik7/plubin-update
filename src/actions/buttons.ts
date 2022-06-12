import { ButtonInteraction, Client } from "discord.js";
import { NextAniMemeButton } from "./commands/animemes";
import { NextDankMemeButton } from "./commands/dank";
import { NextGoodAniMemeButton } from "./commands/goodanimemes";

import { NextMemeButton } from "./commands/memes";
import { NextWallpaperButton } from "./commands/wallpaper";
import { NextHentaiButton } from "./nsfw/hentai";


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

    animemes(){
        NextAniMemeButton(this.interaction, this.args)
    }
    dank(){
        NextDankMemeButton(this.interaction, this.args)
    }
    goodanimemes(){
        NextGoodAniMemeButton(this.interaction, this.args)
    }
    memes(){
        NextMemeButton(this.interaction, this.args)
    }
    wallpapers(){
        NextWallpaperButton(this.interaction, this.args)
    }

    hentai(){
        NextHentaiButton(this.interaction, this.args)
    }
}