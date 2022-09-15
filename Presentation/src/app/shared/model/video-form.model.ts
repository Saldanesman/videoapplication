import { FormControl } from "@angular/forms";

export interface IUploadVideoForm {
    title: FormControl<string>,
    description: FormControl<string>,
    video: FormControl<File | null>
}