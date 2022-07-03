import { ButtonInteraction, Client } from "discord.js";
import { NextAniMemeButton } from "./commands/animemes";
import { NextDankMemeButton } from "./commands/dank";
import { NextGoodAniMemeButton } from "./commands/goodanimemes";
import { NextMemeButton } from "./commands/memes";
import { NextWaifuButton } from "./commands/waifu";
import { NextWallpaperButton } from "./commands/wallpaper";
import { NextAnalButton } from "./nsfw/anal";
import { NextAsianButton } from "./nsfw/asian";
import { NextAssButton } from "./nsfw/ass";
import { NextBlackButton } from "./nsfw/black";
import { NextBlondeButton } from "./nsfw/blonde";
import { NextBlowjobButton } from "./nsfw/blowjob";
import { NextBondageButton } from "./nsfw/bondage";
import { NextBoobButton } from "./nsfw/boob";
import { NextCelebrityButton } from "./nsfw/celebrity";
import { NextCumslutButton } from "./nsfw/cumslut";
import { NextFeetButton } from "./nsfw/feet";
import { NextFemdomButton } from "./nsfw/femdom";
import { NextFilipinoButton } from "./nsfw/filipino";
import { NextFutaButton } from "./nsfw/futa";
import { NextGlassesButton } from "./nsfw/glasses";
import { NextHentaiButton } from "./nsfw/hentai";
import { NextIndianButton } from "./nsfw/indian";
import { NextJapaneseButton } from "./nsfw/japanese";
import { NextKoreanButton } from "./nsfw/korean";
import { MilfCommand, NextMilfButton } from "./nsfw/milf";
import { NextMomButton } from "./nsfw/mom";
import { NextNekoButton, NextSFWNekoButton } from "./nsfw/neko";
import { NextOilButton } from "./nsfw/oil";
import { NextOpppaiButton } from "./nsfw/oppai";
import { NextOrgasmButton } from "./nsfw/orgasm";
import { NextPAWGButton } from "./nsfw/pawg";
import { NextPussyButton } from "./nsfw/pussy";
import { NextRedheadButton } from "./nsfw/redhead";
import { NextShortHairButton } from "./nsfw/shorthair";
import { NextSpankButton } from "./nsfw/spank";
import { NextTanButton } from "./nsfw/tan";
import { NextTentaclesButton } from "./nsfw/tentacles";
import { NextThiccButton } from "./nsfw/thicc";
import { NextTinyButton } from "./nsfw/tiny";
import { NextVanilaButton } from "./nsfw/vanila";
import { NextXmasButton } from "./nsfw/xmas";
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
    nekosfw(){
        NextSFWNekoButton(this.interaction, this.args)
    }
    waifu(){
        NextWaifuButton(this.interaction, this.args)
    }
    wallpapers(){
        NextWallpaperButton(this.interaction, this.args)
    }

    anal(){
        NextAnalButton(this.interaction, this.args)
    }
    asian(){
        NextAsianButton(this.interaction, this.args)
    }
    ass(){
        NextAssButton(this.interaction, this.args)
    }
    black(){
        NextBlackButton(this.interaction, this.args)
    }
    blonde(){
        NextBlondeButton(this.interaction, this.args)
    }
    blowjob(){
        NextBlowjobButton(this.interaction, this.args)
    }
    bondage(){
        NextBondageButton(this.interaction, this.args)
    }
    boobs(){
        NextBoobButton(this.interaction, this.args)
    }
    celebrity(){
        NextCelebrityButton(this.interaction, this.args)
    }
    cumslut(){
        NextCumslutButton(this.interaction, this.args)
    }
    feet(){
        NextFeetButton(this.interaction, this.args)
    }
    femdom(){
        NextFemdomButton(this.interaction, this.args)
    }
    filipino(){
        NextFilipinoButton(this.interaction, this.args)
    }
    futa(){
        NextFutaButton(this.interaction, this.args)
    }
    glasses(){
        NextGlassesButton(this.interaction, this.args)
    }
    hentai(){
        NextHentaiButton(this.interaction, this.args)
    }
    indian(){
        NextIndianButton(this.interaction, this.args)
    }
    japanese(){
        NextJapaneseButton(this.interaction, this.args)
    }
    korean(){
        NextKoreanButton(this.interaction, this.args)
    }
    milf(){
        NextMilfButton(this.interaction, this.args)
    }
    mom(){
        NextMomButton(this.interaction, this.args)
    }
    neko(){
        NextNekoButton(this.interaction, this.args)
    }
    oil(){
        NextOilButton(this.interaction, this.args)
    }
    oppai(){
        NextOpppaiButton(this.interaction, this.args)
    }
    orgasm(){
        NextOrgasmButton(this.interaction, this.args)
    }
    pawg(){
        NextPAWGButton(this.interaction, this.args)
    }
    pussy(){
        NextPussyButton(this.interaction, this.args)
    }
    redhead(){
        NextRedheadButton(this.interaction, this.args)
    }
    shorthair(){
        NextShortHairButton(this.interaction, this.args)
    }
    spank(){
        NextSpankButton(this.interaction, this.args)
    }
    tan(){
        NextTanButton(this.interaction, this.args)
    }
    tentacles(){
        NextTentaclesButton(this.interaction, this.args)
    }
    thicc(){
        NextThiccButton(this.interaction, this.args)
    }
    tiny(){
        NextTinyButton(this.interaction, this.args)
    }
    vanila(){
        NextVanilaButton(this.interaction, this.args)
    }
    xmas(){
        NextXmasButton(this.interaction, this.args)
    }
    yaoi(){
        NextYaoiButton(this.interaction, this.args)
    }
    yuri(){
        NextYuriButton(this.interaction, this.args)
    }
}