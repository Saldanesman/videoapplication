import { createReducer, on } from "@ngrx/store";
import { IVideo } from "src/app/shared/model/video.model";
import { ApiGetVideosSuccess, DeleteVideoById, DeleteVideoByIdSuccess, SetCurrentVideo } from "./videos.action";

export const videosKey = 'videos';

export interface VideosState {
    videos: IVideo[];
    videosAreLoading: boolean;
    currentVideo?: IVideo;
    currentVideoIsLoading: boolean;
    deleteIsLoading: boolean;
}

export const initialState: VideosState = {
    videos: [],
    videosAreLoading: false,
    currentVideoIsLoading: false,
    deleteIsLoading: false
};

export const videosReducer = createReducer(
    initialState,
    on(ApiGetVideosSuccess, (state, action) => ({ ...state, videos: action.videos, videosAreLoading: false })),

    on(SetCurrentVideo, (state, action) => ({ ...state, currentVideo: action.video })),

    on(DeleteVideoById, (state, action) => ({ ...state, deleteIsLoading: true })),
    on(DeleteVideoByIdSuccess, (state, action) => ({ ...state, deleteIsLoading: false }))
);