import { createReducer, on } from "@ngrx/store";
import { IVideo } from "src/app/shared/model/video.model";
import { ApiGetVideosSuccess } from "./videos.action";

export const videosKey = 'videos';

export interface VideosState {
    videos: IVideo[];
    isLoading: boolean
}

export const initialState: VideosState = {
    videos: [],
    isLoading: false
};

export const videosReducer = createReducer(
    initialState,
    on(ApiGetVideosSuccess, (state, action) => ({ videos: action.videos, isLoading: false }))
);