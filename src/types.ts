export type Snowflake = string;
export type LongDescription = string;
export type ShortDescription = string;
export type ColorHex = string;

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