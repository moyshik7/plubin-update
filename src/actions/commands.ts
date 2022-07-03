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
import { NomCommand } from "./commands/nom";
import { PoutCommand } from "./commands/pout";
import { SmugCommand } from "./commands/smug";
import { SleepCommand } from "./commands/sleep";
import { TrapCommand } from "./commands/trap";
import { HugCommand } from "./commands/hug";
import { KissCommand } from "./commands/kiss";
import { LickCommand } from "./commands/lick";
import { PatCommand } from "./commands/pat";
import { PokeCommand } from "./commands/poke";
import { PunchCommand } from "./commands/punch";
import { SlapCommand } from "./commands/slap";
import { TickleCommand } from "./commands/tickle";
import { FeetCommand } from "./nsfw/feet";
import { FemdomCommand } from "./nsfw/femdom";
import { RedheadCommand } from "./nsfw/redhead";
import { XmasCommand } from "./nsfw/xmas";
import { AnalCommand } from "./nsfw/anal";
import { TinyCommand } from "./nsfw/tiny";
import { TanCommand } from "./nsfw/tan";
import { SpankCommand } from "./nsfw/spank";
import { ShortHairCommand } from "./nsfw/shorthair";
import { PAWGCommand } from "./nsfw/pawg";
import { MilfCommand } from "./nsfw/milf";
import { MomCommand } from "./nsfw/mom";
import { PussyCommand } from "./nsfw/pussy";
import { ThiccCommand } from "./nsfw/thicc";
import { GlassesCommand } from "./nsfw/glasses";
import { OilCommand } from "./nsfw/oil";
import { OrgasmCommand } from "./nsfw/orgasm";
import { HeelsCommand } from "./nsfw/heels";

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
    trap(){
        TrapCommand(this.interaction)
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
    hug(){
        HugCommand(this.interaction)
    }
    kiss(){
        KissCommand(this.interaction)
    }
    lick(){
        LickCommand(this.interaction)
    }
    nom(){
        NomCommand(this.interaction)
    }
    pat(){
        PatCommand(this.interaction)
    }
    poke(){
        PokeCommand(this.interaction)
    }
    pout(){
        PoutCommand(this.interaction)
    }
    punch(){
        PunchCommand(this.interaction)
    }
    slap(){
        SlapCommand(this.interaction)
    }
    sleep(){
        SleepCommand(this.interaction)
    }
    smug(){
        SmugCommand(this.interaction)
    }
    thicc(){
        ThiccCommand(this.interaction)
    }
    tickle(){
        TickleCommand(this.interaction)
    }

    anal(){
        AnalCommand(this.interaction)
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
    feet(){
        FeetCommand(this.interaction)
    }
    femdom(){
        FemdomCommand(this.interaction)
    }
    filipino(){
        FilipinoCommand(this.interaction)
    }
    futa(){
        FutaCommand(this.interaction)
    }
    glasses(){
        GlassesCommand(this.interaction)
    }
    heels(){
        HeelsCommand(this.interaction)
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
    milf(){
        MilfCommand(this.interaction)
    }
    mom(){
        MomCommand(this.interaction)
    }
    neko(){
        NekoCommand(this.interaction)
    }
    oil(){
        OilCommand(this.interaction)
    }
    oppai(){
        OppaiCommand(this.interaction)
    }
    orgasm(){
        OrgasmCommand(this.interaction)
    }
    pawg(){
        PAWGCommand(this.interaction)
    }
    pussy(){
        PussyCommand(this.interaction)
    }
    redhead(){
        RedheadCommand(this.interaction)
    }
    shorthair(){
        ShortHairCommand(this.interaction)
    }
    spank(){
        SpankCommand(this.interaction)
    }
    tan(){
        TanCommand(this.interaction)
    }
    tentacles(){
        TentaclesCommand(this.interaction)
    }
    tiny(){
        TinyCommand(this.interaction)
    }
    vanila(){
        VanilaCommand(this.interaction)
    }
    xmas(){
        XmasCommand(this.interaction)
    }
    yaoi(){
        YaoiCommand(this.interaction)
    }
    yuri(){
        YuriCommand(this.interaction)
    }
}