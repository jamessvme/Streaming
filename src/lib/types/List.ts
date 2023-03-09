export enum ListType {
    FILE = "file",
    FOLDER = "folder"
}

export type List = {
    name: string;
    type: ListType,
    lastModifiedAt: Date 
}