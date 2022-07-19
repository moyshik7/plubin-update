import { ButtonInteraction } from "discord.js"
import { Database } from "../../database"
import { DatabaseUser } from "../../types"

export const DefaultUser: DatabaseUser = {
    id: "",
    name: "",
    watchlist: [],
    waifu: {
        harem: [],
        points: 0,
        lastDrop: 0,
        limit: 5
    },
    tier: {
        tier: 0,
        validity: 0,
        paid: false
    }
}

export const AddNewUser = (db: Database, interaction: ButtonInteraction): Promise<DatabaseUser> => {
    return new Promise((resolve, reject) => {
        const user = DefaultUser;
        user.id = interaction.user.id;
        user.name = interaction.user.username;
        db.update({ id: interaction.user.id }, user )
            .then((a) => {
                if(a){
                    return resolve(user)
                }
                else return resolve(user)
            }).catch(reject)
    })
}