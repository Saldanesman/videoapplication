import { createSelector, createFeatureSelector } from "@ngrx/store";
import { videosKey, VideosState } from "./videos.reducer";

export const getVideosState = createFeatureSelector<VideosState>(videosKey);

export const selectVideos = createSelector(
    getVideosState,
    (state: VideosState) => state.videos
);