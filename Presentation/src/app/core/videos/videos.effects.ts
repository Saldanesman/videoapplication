import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { ApiGetVideos, ApiGetVideosSuccess, DeleteVideoById, DeleteVideoByIdSuccess, UpdateVideo, UpdateVideoSuccess } from "./videos.action";
import { VideoService } from "src/app/service/video.service";
import { Router } from "@angular/router";

@Injectable()
export class VideosEffects {
    constructor( 
        private action$: Actions,
        private videoService: VideoService,
        private router: Router
    ) {  }
        
    getVideosEffects$ = createEffect( () => {
        return this.action$.pipe(
            ofType(ApiGetVideos),
            tap(() => { console.log('Get Api in queue') }),
            mergeMap((action) => {
                console.log('Get Api in process');
                return this.videoService.getVideos().pipe(
                    map(res => ApiGetVideosSuccess({videos: res})),
                    catchError(error => of(error)),
                    tap (() => {console.log('Get End')})
                );
            })
        );
    });

    updateVideoEffects$ = createEffect( () => {
        return this.action$.pipe(
            ofType(UpdateVideo),
            tap(() => { console.log('UpdateVideo in queue') }),
            mergeMap((action) => {
                console.log('UpdateVideo in process',action.video);
                return this.videoService.updateVideo(action.video).pipe(
                    map(res => UpdateVideoSuccess({video: res})),
                    catchError(error => of(error)),
                    tap (() => {console.log('UpdateVideo End')})
                );
            })
        );
    });

    deleteVideoByIdEffects$ = createEffect( () => {
        return this.action$.pipe(
            ofType(DeleteVideoById),
            tap(() => { console.log('DeleteVideoById in queue') }),
            mergeMap((action) => {
                console.log('DeleteVideoById in process', action.id);
                return this.videoService.deleteVideoById(action.id).pipe(
                    map(res => DeleteVideoByIdSuccess()),
                    catchError(error => of(error)),
                    tap (() => {console.log('DeleteVideoById End')})
                );
            })
        );
    });

    goToHomeEffects$ = createEffect( () => {
        return this.action$.pipe(
            ofType(DeleteVideoByIdSuccess),
            tap(() => { 
                console.log('Go to Home');
                this.router.navigate(['/'])
            }),
        );
    }, {dispatch: false});
}