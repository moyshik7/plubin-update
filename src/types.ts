export type Snowflake = string;
export type LongDescription = string;
export type ShortDescription = string;
export type ColorHex = string;
export type Integer = number;
export type AnilistID = number;
export type WaifuID = number;
export type TimeInteger = number;
export type WaifuRelationshipStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

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

export interface HelpMessageType {
    title?: string;
    message: LongDescription;
}

export interface  DatabaseAnimeSaveType {
    id: AnilistID;
    name: string;
    watched: boolean;
}
export interface WaifuData {
    id: WaifuID;
    name: string;
    points: Integer;
    status: WaifuRelationshipStatus;
    lastInteract?: TimeInteger;
}
export interface DatabaseUserWaifu {
    waifu: WaifuData,
    harem: Array<WaifuData>,
    points: Integer,
    lastDrop?: TimeInteger;
    limit: Integer;
}
export interface UserTier {
    tier: Integer;
    validity: TimeInteger,
    paid: boolean;
}
export interface DatabaseUser {
    id: Snowflake;
    watchlist: Array<DatabaseAnimeSaveType>;
    waifu: DatabaseUserWaifu;
    tier: UserTier;
}