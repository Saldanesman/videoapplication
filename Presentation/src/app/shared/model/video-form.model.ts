import { FormControl } from "@angular/forms";

export interface IUploadVideoForm {
    title: FormControl<string>,
    description: FormControl<string>,
    url: FormControl<string>,
    image: FormControl<File | undefined>
}