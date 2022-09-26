import { createAction, props } from "@ngrx/store";
import { IFile } from "src/app/shared/model/file.model";

export const ApiPostFile = createAction('API POST File', props<{formData: FormData}>());
export const ApiPostFileSuccess = createAction('API POST File Success', props<{file: IFile}>());

