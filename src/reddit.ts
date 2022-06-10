/**
 * Set up production check
 */
let production: boolean;
if(process.env.PRODUCTION==="F"){production=false}else{production=true}

import axios from "axios";


export const GetPosts = (sub: string, limit?: number, after?: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if(!limit){
            limit = 10;
        }
        if(!after){
            after = ""
        }
        if(!sub){
            return reject(new Error("No subreddit name provided"))
        }
        let url = `https://reddit.com/r/${sub}/random.json?limit=${limit}&after=${after}`

        if(!production){
            url = `https://forwarder.3c3bfbb28644.repl.co?${new URLSearchParams({
                url: url
            }).toString()}`
        }

        axios
    })
}