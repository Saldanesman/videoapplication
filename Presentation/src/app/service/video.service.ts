import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IVideo } from '../shared/model/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly API = 'http://localhost:8080/videos';

  private mock = [
    {id: '0', title: 'titulo0', description: 'description0', url: 'url0', image: 'data0'},
    {id: '1', title: 'titulo1', description: 'description1', url: 'url1', image: 'data1'},
    {id: '2', title: 'titulo2', description: 'description2', url: 'url2', image: 'data2'},
    {id: '3', title: 'titulo3', description: 'description3', url: 'url3', image: 'data3'},
    {id: '4', title: 'titulo4', description: 'description4', url: 'url4', image: 'data4'},
    {id: '5', title: 'titulo5', description: 'description5', url: 'url5', image: 'data5'},
    {id: '6', title: 'titulo6', description: 'description6', url: 'url6', image: 'data6'},
    {id: '7', title: 'titulo7', description: 'description7', url: 'url7', image: 'data7'},
    {id: '8', title: 'titulo8', description: 'description8', url: 'url8', image: 'data8'},
    {id: '9', title: 'titulo9', description: 'description9', url: 'url9', image: 'data9'}
  ];

  constructor() { }

  public getVideos(): Observable<IVideo[]> {
    return of(this.mock).pipe(delay(3000));
  }

  public getVideoById(id: string): Observable<IVideo> {
    return of(this.mock[2]).pipe(delay(3000));
  }
}
