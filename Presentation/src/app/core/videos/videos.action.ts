import { createAction, props } from "@ngrx/store";
import { IVideo } from "src/app/shared/model/video.model";

export const ApiGetVideos = createAction('Get Videos');
export const ApiGetVideosSuccess = createAction('Get Videos Success', props<{ videos: IVideo[]}>());

export const SetCurrentVideo = createAction('Set Current Video', props<{ video: IVideo}>());

export const EditCurrentVideo = createAction('Edit Current');

export const DeleteVideoById = createAction('Delete Video', props<{ id: string }>());
export const DeleteVideoByIdSuccess = createAction('Delete Video Success')
