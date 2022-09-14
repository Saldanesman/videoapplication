import { createAction, props } from "@ngrx/store";
import { IVideo } from "src/app/shared/model/video.model";

export const ApiGetVideos = createAction('Get Videos');

export const ApiGetVideosSuccess = createAction('Get Videos Success', props<{ videos: IVideo[]}>())

export const ApiGetVideoById = createAction('Get Video By ID');

export const ApiGetVideoByIdSuccess = createAction('Get Video By ID Success', props<{ videos: IVideo}>())
