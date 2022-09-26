import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { VideoService } from "src/app/service/video.service";
import { ApiPostFile, ApiPostFileSuccess } from "./file.actions";

@Injectable()
export class FileEffects {
    constructor( 
        private action$: Actions,
        private videoService: VideoService
    ) {  }
        
    postFileEffects$ = createEffect( () => {
        return this.action$.pipe(
            ofType(ApiPostFile),
            tap(() => { console.log('ApiPostFile in queue') }),
            mergeMap((action) => {
                console.log('ApiPostFile in process');
                return this.videoService.uploadFile(action.formData).pipe(
                    map(res => ApiPostFileSuccess({ file: res })),
                    catchError(error => of(error)),
                    tap (() => {console.log('ApiPostFile End')})
                );
            })
        );
    });
}