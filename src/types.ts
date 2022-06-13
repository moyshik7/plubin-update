export type Snowflake = string;
export type LongDescription = string;
export type ShortDescription = string;
export type ColorHex = string;
export type Integer = number;

export interface AnilistTitles {
    english: string;
    native?: string;
    romaji?: string;
}

export interface ImageURLSize {
    large?: string;
    medium?: string;
    small?: string;
}

export interface AnilistAnimeResult {
    id: number;
    idMal?: number;
    title: AnilistTitles;
    description: LongDescription;
    season?: string;
    status?: string;
    episodes?: number;
    isAdult?: boolean;
    genres?: Array<string>;
    format?: string;
    color?: ColorHex;
    cover: ImageURLSize;
    banner: string;
}
export interface AnilistMangaResult {
    id: number;
    title: AnilistTitles;
    description: LongDescription;
    volumes: number;
    chapters: number;
    status?: string;
    isAdult?: boolean;
    genres?: Array<string>;
    format?: string;
    color?: ColorHex;
    cover: ImageURLSize;
    banner?: string;
}

export interface RedditVote {
    up?: number;
    down?: number;
    ratio?: number;
}

export interface RedditResponse {
    subreddit: string;
    title: string;
    id: string;
    votes: RedditVote;
    nsfw: boolean;
    image: string;
    url?: string;
    after?: string;
    user?: string;
    video?: boolean;
}

export interface RedditRawResponse {
    after: string;
    data: Array<RedditResponse>;
}