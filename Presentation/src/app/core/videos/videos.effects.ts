import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { ApiGetVideos, ApiGetVideosSuccess } from "./videos.action";
import { VideoService } from "src/app/service/video.service";

@Injectable()
export class VideosEffects {
    constructor( 
        private action$: Actions,
        private videoService: VideoService
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

}