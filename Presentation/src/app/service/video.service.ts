import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IVideo } from '../shared/model/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly API = 'http://localhost:8080/videos';

  constructor(private readonly httpClient: HttpClient) { }

  public getVideos(): Observable<IVideo[]> {
    return this.httpClient.get<IVideo[]>(this.API);
  }

  /* public getVideoById(id: string): Observable<IVideo> {
    return of(this.mock[0]).pipe(delay(2000));
  } */

  public deleteVideoById(id: string): Observable<string> {
    return this.httpClient.delete<string>(this.API + '/' + id );
  }

  public updateVideo(video: IVideo): Observable<IVideo> {
    return this.httpClient.post<IVideo>(this.API, video);
  }

  public uploadVideo(video: IVideo): Observable<IVideo> {
    return this.httpClient.post<IVideo>(this.API, video );
  }
}
