import { createAction, props } from "@ngrx/store";
import { IVideo } from "src/app/shared/model/video.model";

export const ApiGetVideos = createAction('Get Videos');
export const ApiGetVideosSuccess = createAction('Get Videos Success', props<{ videos: IVideo[]}>());

export const SetCurrentVideo = createAction('Set Current Video', props<{ video: IVideo}>());

export const DeleteVideoById = createAction('Delete Video', props<{ id: string }>());
export const DeleteVideoByIdSuccess = createAction('Delete Video Success');

export const UpdateVideo = createAction('Update Video', props<{ video: IVideo}>());
export const UpdateVideoSuccess = createAction('Update Video Success', props<{ video: IVideo}>());

export const UploadVideo = createAction('Upload Video', props<{ video: IVideo}>());
export const UploadVideoSuccess = createAction('Upload Video Success', props<{ video: IVideo}>());
