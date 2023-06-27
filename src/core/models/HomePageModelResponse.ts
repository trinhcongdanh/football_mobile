export interface HomePageModel {
    _id: string;
    video: Video;
    ads: Ads;
    default_league_id: string;
    national_cup: Nationalcup;
    magazine: Magazine[];
    instagram: InstagramProp[];
}

export interface InstagramProp {
    embed_code: string;
}

interface Magazine {
    image_url: string;
    link: string;
    caption_he: string;
    caption_en: string;
}

interface Nationalcup {
    image_url: string;
    cup_id: string;
}

interface Ads {
    image_url: string;
    link?: any;
    object_type?: any;
    object_id?: any;
}

interface Video {
    video_url: string;
    image_url: string;
    length: string;
    caption_he: string;
    caption_en: string;
}

export interface HomeLayoutModel {
    _id: string;
    layout: string[];
}
