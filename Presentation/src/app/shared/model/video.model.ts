import { IFile } from "./file.model";

export interface IVideo {
    id?: string,
    title: string,
    description: string,
    video: IFile,
    miniature: IFile
}