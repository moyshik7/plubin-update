import axios from "axios";

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
        }).catch(reject)
    })
}
