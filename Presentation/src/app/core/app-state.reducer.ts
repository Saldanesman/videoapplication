import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { IAppState } from "./app-state.interface";
import * as fromVideos from "./videos/videos.reducer";
import * as fromFile from "./file/file.reducer";

export const initialState: IAppState = {
    [fromVideos.videosKey]: fromVideos.initialState,
    [fromFile.fileKey]: fromFile.initialState
};

export const reducers: ActionReducerMap<IAppState> = {
    [fromVideos.videosKey]: fromVideos.videosReducer,
    [fromFile.fileKey]: fromFile.fileReducer
}