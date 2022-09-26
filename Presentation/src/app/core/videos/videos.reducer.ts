import { createReducer, on } from "@ngrx/store";
import { IVideo } from "src/app/shared/model/video.model";
import { ApiGetVideosSuccess, DeleteVideoById, DeleteVideoByIdSuccess, SetCurrentVideo, UpdateVideo, UpdateVideoSuccess, UploadVideo, UploadVideoSuccess } from "./videos.actions";

export const videosKey = 'videos';

export interface VideosState {
    videos: IVideo[];
    videosAreLoading: boolean;
    currentVideo?: IVideo;
    currentVideoIsLoading: boolean;
    deleteIsLoading: boolean;
    updateIsLoading?: boolean;
    uploadIsLoading?: boolean;
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
    on(DeleteVideoByIdSuccess, (state, action) => ({ ...state, deleteIsLoading: false })),

    on(UpdateVideo, (state, action) => ({ ...state, updateIsLoading: true })),
    on(UpdateVideoSuccess, (state, action) => ({ ...state, currentVideo:action.video, updateIsLoading: false })),

    on(UploadVideo, (state, action) => ({ ...state, uploadIsLoading: true })),
    on(UploadVideoSuccess, (state, action) => ({ ...state, uploadIsLoading: false })),
);