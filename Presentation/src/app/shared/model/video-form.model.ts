import { FormControl } from "@angular/forms";
import { IFile } from "./file.model";

export interface IUploadVideoForm {
    title: FormControl<string>,
    description: FormControl<string>,
    video: FormControl<IFile | undefined>,
    miniature: FormControl<IFile | undefined>
}