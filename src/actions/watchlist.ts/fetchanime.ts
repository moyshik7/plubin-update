import axios from "axios";


export const FetchAnimeByID = (id: number) => {
    return new Promise((
        resolve: (any) => void,
        reject: (any) => void
    ): void => {
        if(!id){
            reject(new Error("No id Provided"))
            return;
        }
        const query: string = `
        query ($id: id) {
            Media(search: $search, type: ANIME) {
                id
                title {
                    english
                    native
                }
                season
                status
                episodes
            }
        }
        `
        axios.post("https://graphql.anilist.co",
            JSON.stringify({
                query: query,
                variables: {
                    id: id
                }
            }), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((r): void => {
            if(!r){
                reject("No Anime found with this Query")
                return;
            }
            let result = {
                id: r.data.data.Media.id,
                title: r.data.data.Media.title,
                season: r.data.data.Media.season,
                status: r.data.data.Media.status,
                episodes: r.data.data.Media.episodes
            }

            resolve(result)
            return;
        }).catch(reject)
    })
}