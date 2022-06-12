import { ButtonInteraction, Client } from "discord.js";
import { NextAniMemeButton } from "./commands/animemes";
import { NextDankMemeButton } from "./commands/dank";
import { NextGoodAniMemeButton } from "./commands/goodanimemes";

import { NextMemeButton } from "./commands/memes";
import { NextWallpaperButton } from "./commands/wallpaper";
import { NextFutaButton } from "./nsfw/futa";
import { NextHentaiButton } from "./nsfw/hentai";
import { NextTentaclesButton } from "./nsfw/tentacles";
import { NextYaoiButton } from "./nsfw/yaoi";
import { NextYuriButton } from "./nsfw/yuri";


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

    futa(){
        NextFutaButton(this.interaction, this.args)
    }
    hentai(){
        NextHentaiButton(this.interaction, this.args)
    }
    tentacles(){
        NextTentaclesButton(this.interaction, this.args)
    }
    yaoi(){
        NextYaoiButton(this.interaction, this.args)
    }
    yuri(){
        NextYuriButton(this.interaction, this.args)
    }
}