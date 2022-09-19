import { videosKey } from "./videos/videos.reducer";
import { VideosState } from "./videos/videos.reducer";

export interface IAppState {
    [videosKey]: VideosState
}