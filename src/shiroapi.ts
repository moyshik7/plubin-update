import axios, { AxiosError } from "axios";
import { Sentry } from "./sentry";

const BASE_URL = "https://api.dbot.dev"

export const GetShiroRaw = (endpoint: string): Promise<string> => {
    return new Promise((
        resolve: (any) => void,
        reject: (any) => void
    ) => {
        axios({
            url: `${BASE_URL}/${endpoint}`,
            method: "GET"
        }).then(res => {
            resolve(res.data.url)
        }).catch(err => {
            Sentry.captureMessage(`[Shiro] Error occured when fetching ${endpoint}\nURL: ${BASE_URL}/${endpoint}\nMessage: ${(err as AxiosError).message}\nCode: ${(err as AxiosError).code}/n`)
            Sentry.captureEvent(err)
        })
    })
}
