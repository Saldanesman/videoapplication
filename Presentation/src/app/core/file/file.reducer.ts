import { createReducer, on } from "@ngrx/store";
import { IFile } from "src/app/shared/model/file.model";
import { ApiPostFile, ApiPostFileSuccess } from "./file.actions";

export const fileKey = 'file';

export interface FileState {
    file?: IFile;
    isLoading: boolean;
}

export const initialState: FileState = {
    file: undefined,
    isLoading: false
}

export const fileReducer = createReducer(
    initialState,
    on(ApiPostFile, (state, action) => ({ isLoading: true })),
    on(ApiPostFileSuccess, (state, action) => ({ file: action.file, isLoading: true }))
);