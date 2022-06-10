export type Snowflake = string;
export type LongDescription = string;
export type ShortDescription = string;

export interface AnilistTitles {
    english: string;
    native?: string;
    romaji?: string;
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
}