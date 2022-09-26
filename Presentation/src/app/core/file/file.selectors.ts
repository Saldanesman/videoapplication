import { createFeatureSelector, createSelector } from "@ngrx/store";
import { fileKey, FileState } from "./file.reducer";

export const getFileState = createFeatureSelector<FileState>(fileKey);

export const selectIsLoading = createSelector(
    getFileState,
    (state: FileState) => state.isLoading
);

export const selectFile = createSelector(
    getFileState,
    (state: FileState) => state.file
);