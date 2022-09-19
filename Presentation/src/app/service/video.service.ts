import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IVideo } from '../shared/model/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly API = 'http://localhost:8080/videos';

  private example_img = 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg';
  private mock = [
    //{id: '0', title: 'titulo0', description: 'description0', url: 'https://www.youtube.com/watch?v=DEgKTGRUGcI', image: new File([new Blob()], 'image0')},
    {id: '0', title: 'titulo0', description: 'description0', url: 'https://www.youtube.com/watch?v=DEgKTGRUGcI', image: this.example_img},
    {id: '1', title: 'titulo1', description: 'description1', url: 'https://www.youtube.com/watch?v=-fVQaHBvVJo', image: this.example_img},
    {id: '2', title: 'titulo2', description: 'description2', url: 'https://www.youtube.com/watch?v=RuPrS2Jgdfs', image: this.example_img},
    {id: '3', title: 'titulo3', description: 'description3', url: 'url3', image: this.example_img},
    {id: '4', title: 'titulo4', description: 'description4', url: 'url4', image: this.example_img},
    {id: '5', title: 'titulo5', description: 'description5', url: 'url5', image: this.example_img},
    {id: '6', title: 'titulo6', description: 'description6', url: 'url6', image: this.example_img},
    {id: '7', title: 'titulo7', description: 'description7', url: 'url7', image: this.example_img},
    {id: '8', title: 'titulo8', description: 'description8', url: 'url8', image: this.example_img},
    {id: '9', title: 'titulo9', description: 'description9', url: 'url9', image: this.example_img}
  ];

  constructor() { }

  public getVideos(): Observable<IVideo[]> {
    return of(this.mock).pipe(delay(2000));
  }

  public getVideoById(id: string): Observable<IVideo> {
    return of(this.mock[0]).pipe(delay(2000));
  }

  public deleteVideoById(id: string): Observable<string> {
    return of('Deleted').pipe(delay(2000));
  }

  public updateVideo(video: IVideo): Observable<IVideo> {
    return of(this.mock[1]).pipe(delay(2000));
  }

  public createVideo(video: IVideo): Observable<IVideo> {
    return of(this.mock[2]).pipe(delay(2000));
  }
}
