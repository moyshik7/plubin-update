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
import { AsianCommand } from "./nsfw/asian";
import { AssCommand } from "./nsfw/ass";
import { BlackCommand } from "./nsfw/black";
import { BlondeCommand } from "./nsfw/blonde";
import { BlowjobCommand } from "./nsfw/blowjob";
import { BondageCommand } from "./nsfw/bondage";
import { BoobCommand } from "./nsfw/boob";
import { NekoCommand } from "./nsfw/neko";
import { WaifuCommand } from "./commands/waifu";
import { VanilaCommand } from "./nsfw/vanila";
import { CumslutCommand } from "./nsfw/cumslut";
import { CelebrityCommand } from "./nsfw/celebrity";
import { MangaCommand } from "./commands/manga";
import { IndianCommand } from "./nsfw/indian";
import { JapaneseCommand } from "./nsfw/japanese";
import { FilipinoCommand } from "./nsfw/filipino";
import { KoreanCommand } from "./nsfw/korean";
import { BlushCommand } from "./commands/blush";
import { CryCommand } from "./commands/cry";

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
    manga(){
        MangaCommand(this.interaction)
    }
    memes(){
        MemeCommand(this.interaction)
    }
    waifu(){
        WaifuCommand(this.interaction)
    }
    wallpapers(){
        WallpaperCommand(this.interaction)
    }

    blush(){
        BlushCommand(this.interaction)
    }
    cry(){
        CryCommand(this.interaction)
    }

    asian(){
        AsianCommand(this.interaction)
    }
    ass(){
        AssCommand(this.interaction)
    }
    black(){
        BlackCommand(this.interaction)
    }
    blonde(){
        BlondeCommand(this.interaction)
    }
    blowjob(){
        BlowjobCommand(this.interaction)
    }
    bondage(){
        BondageCommand(this.interaction)
    }
    boobs(){
        BoobCommand(this.interaction)
    }
    celebrity(){
        CelebrityCommand(this.interaction)
    }
    cumslut(){
        CumslutCommand(this.interaction)
    }
    filipino(){
        FilipinoCommand(this.interaction)
    }
    futa(){
        FutaCommand(this.interaction)
    }
    hentai(){
        HentaiCommand(this.interaction)
    }
    indian(){
        IndianCommand(this.interaction)
    }
    japanese(){
        JapaneseCommand(this.interaction)
    }
    korean(){
        KoreanCommand(this.interaction)
    }
    neko(){
        NekoCommand(this.interaction)
    }
    oppai(){
        OppaiCommand(this.interaction)
    }
    tentacles(){
        TentaclesCommand(this.interaction)
    }
    vanila(){
        VanilaCommand(this.interaction)
    }
    yaoi(){
        YaoiCommand(this.interaction)
    }
    yuri(){
        YuriCommand(this.interaction)
    }
}