import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { IAppState } from "./app-state.interface";
import * as fromVideos from "./videos/videos.reducer";

export const initialState: IAppState = {
    [fromVideos.videosKey]: fromVideos.initialState
};

export const reducers: ActionReducerMap<IAppState> = {
    [fromVideos.videosKey]: fromVideos.videosReducer
}