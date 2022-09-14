import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IVideo } from '../shared/model/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly API = 'http://localhost:8080/videos';

  constructor() { }

  public getVideos(): Observable<IVideo[]> {
    return of([
      {id: '0', title: 'titulo0', description: 'description0', data: 'data0'},
      {id: '1', title: 'titulo1', description: 'description1', data: 'data1'},
      {id: '2', title: 'titulo2', description: 'description2', data: 'data2'},
      {id: '3', title: 'titulo3', description: 'description3', data: 'data3'},
      {id: '4', title: 'titulo4', description: 'description4', data: 'data4'},
      {id: '5', title: 'titulo5', description: 'description5', data: 'data5'},
      {id: '6', title: 'titulo6', description: 'description6', data: 'data6'},
      {id: '7', title: 'titulo7', description: 'description7', data: 'data7'},
      {id: '8', title: 'titulo8', description: 'description8', data: 'data8'},
      {id: '9', title: 'titulo9', description: 'description9', data: 'data9'}
    ]).pipe(delay(3000));
  }

  public getVideoById(id: string): Observable<IVideo> {
    return of({id: '3', title: 'titulo3', description: 'description3', data: 'data3'}).pipe(delay(3000));
  }
}
