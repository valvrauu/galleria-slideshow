export interface ArtistProps {
    image: string;
    name: string;
}

export interface ImagesProps {
    thumbnail: string;
    hero: {
        small: string;
        large: string;
    };
    gallery: string;
}

export interface ArtProps {
    artist: ArtistProps;
    name: string;
    year?: number;
    description?: string;
    source?: string;
    images: ImagesProps;
}
