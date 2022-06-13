import { Client, CommandInteraction } from "discord.js";

import { Ping } from "./commands/ping";
import { AnimeCommand } from "./commands/anime";
import { MemeCommand } from "./commands/memes";
import { DankMemeCommand } from "./commands/dank";
import { AniMemeCommand } from "./commands/animemes";
import { GoodAniMemeCommand } from "./commands/goodanimemes";
import { WallpaperCommand } from "./commands/wallpaper";
import { HentaiCommand } from "./nsfw/hentai";
import { TentaclesCommand } from "./nsfw/tentacles";
import { YaoiCommand } from "./nsfw/yaoi";
import { YuriCommand } from "./nsfw/yuri";
import { FutaCommand } from "./nsfw/futa";
import { OppaiCommand } from "./nsfw/oppai";

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

    anime(){
        AnimeCommand(this.interaction)
    }
    animemes(){
        AniMemeCommand(this.interaction)
    }
    dank(){
        DankMemeCommand(this.interaction)
    }
    goodanimemes(){
        GoodAniMemeCommand(this.interaction)
    }
    memes(){
        MemeCommand(this.interaction)
    }
    wallpapers(){
        WallpaperCommand(this.interaction)
    }

    futa(){
        FutaCommand(this.interaction)
    }
    hentai(){
        HentaiCommand(this.interaction)
    }
    oppai(){
        OppaiCommand(this.interaction)
    }
    tentacles(){
        TentaclesCommand(this.interaction)
    }
    yaoi(){
        YaoiCommand(this.interaction)
    }
    yuri(){
        YuriCommand(this.interaction)
    }
}