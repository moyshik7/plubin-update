/**
 * Set up production check
 */
let production: boolean;
if(process.env.PRODUCTION==="F"){production=false}else{production=true}

import axios, { AxiosError, AxiosResponse } from "axios";
import { RedditRawResponse, RedditResponse } from "./types";
import { Sentry } from "./sentry";


export const GetRedditPosts = (sub: string, limit?: number, after?: string): Promise<RedditRawResponse> => {
    return new Promise((resolve: (any) => void, reject: (any) => void) => {
        if(!limit){ limit = 10;}
        if(!after){
            after = ""
            limit += 3
        }
        if(!sub){
            return reject(new Error("No subreddit name provided"))
        }
        let url = `https://www.reddit.com/r/${sub}.json?limit=${limit}&after=${after}`

        /**
         * If not on production, 
         * Use proxy server
         */
        if(!production){
            url = `https://forwarder.3c3bfbb28644.repl.co?${new URLSearchParams({
                url: url
            }).toString()}`
        }

        axios.get(url).then((data: AxiosResponse): void => {
            let response: RedditRawResponse = {
                after: data.data.data.after,
                data: []
            }
            for(const a of data.data.data.children){
                /**
                 * If video and no image
                 */
                /**
                 * Clear up the response
                 */
                let rear: RedditResponse = {
                    id: a.data.id,
                    subreddit: a.data.subreddit,
                    title: a.data.title,
                    votes: {
                        up: a.data.ups,
                        down: a.data.downs,
                        ratio: a.data.upvote_ratio
                    },
                    nsfw: a.data.over_18,
                    image: a.data.url || a.data.thumbnail,
                    after: response.after
                }
                if(!a.data.is_video){
                    rear.video = true;
                    //rear.image = a.data.thumbnail;
                }
                /**
                 * Add item to array
                 */
                response.data.push(rear);
            }
            resolve(response)
            return;
        }).catch((err: AxiosError) => {
            Sentry.captureMessage(`[Reddit] Error occured when fetching r/${sub}\nCode: ${err.code}\nMessage: ${err.message}`)
            Sentry.captureException(err)
        })
    })
}
