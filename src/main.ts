import dotenv from "dotenv"
dotenv.config()

import { 
    Client, 
    Interaction,
    Message, 
    ActionRowBuilder, 
    ButtonBuilder, 
    EmbedBuilder, 
    GatewayIntentBits,
    InteractionType,
    ButtonStyle
} from "discord.js"
import { Commands } from "./actions/commands"
import { Buttons } from "./actions/buttons"
import { HelpSelectCommand } from "./actions/help"
import { TopggStatusHandler } from "./topgg"

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on("ready", () => {
    console.log("Bot ready")
    TopggStatusHandler(client)
})

client.on("messageCreate", (message: Message) => {
    if(message.author.bot){ return }
    if(!message.content){ return }
    if(!message.content.startsWith(".")){ return }
    if(message.content.length > 200){ return }
    const args = message.content.split(" ")
    if(args.length < 1){ return }
    const oldcommands: Array<string> = ["anal","anime","animeme","asian","asians","avatar","baka","bbc","bdsm","bj","black","blonde","blowjob","boob","boobs","butt","butts","cat","catgirl","celebrity","christmas","classic","comic","comics","cs","cuddle","cumslut","cumsluts","dank","define","dickgirl","dickgirls","dog","ebony","emojis","ero","erotic","feed","feet","femdom","filipino","fox","foxgirl","gasm","gay","glass","glasses","goose","h","hal","halloween","hardcore","heel","heels","help","hentai","holo","hug","indian","invite","japanese","kick","kill","kiss","kitty","korean","kuni","lewd","lizard","long","longhair","lyric","lyrics","manga","massporn","meme","meow","milf","milfs","mom","moms","neko","oil","orgasm","pat","pawg","ping","peanus","penis","poke","porn","puppy","pussy","red","redhead","redheads","say","server","short","shorthair","slap","smug","spank","tan","tentacle","tentacles","thick","tickle","tiny","tits","trap","waifu","wallpaper","xmas","yaoi","yuri"];

    if(oldcommands.includes(args[0].slice(1))){
        try {
            const embed = new EmbedBuilder()
                .setTitle("Please use slash commands")
                .setDescription(`Last month discord introduced a new feature called Text in Voice and made some api changes
Which seems to have broken this bot(Plubin) along with a few others
And because of this after a long waitiing I decided to write the entire bot (I know it's dumb but bear with me)
Righ now I have migrated and released most of the slash commands and will be releasing the normal commands soon
While you wait you can try using the slash commands
If you haven't already allow thhe bot to create slash command in your guild you can do that with [this link](${process.env.BOT_INVITE})`)
                .setColor("#ff6f61");

                const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder();
                row.addComponents(new ButtonBuilder()
                    .setLabel("Invite with Shash command")
                    .setStyle(ButtonStyle.Link)
                    .setURL(process.env.BOT_INVITE)
                )

            message.reply({
                embeds: [embed],
                components: [row]
            })
        } catch(err){console.log(err)}
    }
})

client.on("interactionCreate", (interaction: Interaction): void => {
    try {
        /**
         * Command used
         * Chat Input command
         * aka
         * Slah command
         */
        if(interaction.type === InteractionType.ApplicationCommand){
            /**
             * Create new instance of commandhandler class
             */
            const commandsCollector = new Commands(client, interaction)
            /**
             * Get the command by name
             */
            let command = commandsCollector[interaction.commandName]
            /**
             * If commands exists,
             * Execute it
             * Else 
             * Leave it
             */
            if(command){
                /**
                 * Bind the parent class
                 */
                command = command.bind(commandsCollector)
                /**
                 * Execute command
                 */
                command()
            }
            /**
             * Stop the function here
             */
            return;
        }
        /**
         * Button press
         */
        if(interaction.isButton()){
            /**
             * Separate arguments
             */
            let args = interaction.customId.split("-")
            if(args.length < 2){
                /**
                 * args.length < 1: No command
                 * args.length < 2: No user id attached.
                 * Not executed
                 */
                interaction.deferUpdate()
                return;
            }
            /**
             * Remove whitespaces
             */
            args = args.map(item => item.trim())

            /**
             * The first argument is the command it
             * Remove it from args array 
             * and store in a new variable
             */
            const name = args.shift()

            /**
             * Create new instance of button press handler class
             */
            const buttonHandler = new Buttons(client, interaction, args)

            /**
             * Get action by name
             */
            let button = buttonHandler[name]

            /**
             * If that button is registered
             */
            if(button){
                /**
                 * Bind button withparent object
                 * So it doesn't lose values
                 */
                button = button.bind(buttonHandler)
                /**
                 * Execute the button
                 */
                button()
            }
            /**
             * Stop the function here
             */
            return;
        }
        /**
         * Select menu
         * [Dropdowns]
         */
        if(interaction.isSelectMenu()){
            /**
             * We only have one select menu so no need to build a builder
             */
            if((Date.now() - interaction.message.createdAt.getTime()) > 5 * 60 * 1000){
                return;
            }
            if(!interaction.customId || interaction.customId.length < 1){ return }
            let args = interaction.customId.split("-")
            if(args.length < 2){ return }
            if(args[args.length - 1] !== interaction.user.id){ return }
            const command = args[0]
            args = args.slice(1)

            if(command === "help"){
                HelpSelectCommand(interaction)
            }
        }
    } catch (err){ console.log(err) }
})

client.login(process.env.BOT_TOKEN)