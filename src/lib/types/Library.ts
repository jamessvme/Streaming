export type LibraryType = {
    id: number;
    name: string;
    description: string;
    tags: {
        label: string;
        color: string;
    }[],
    isTopRanked: boolean,
    votes: number;
    downloads: number;
}