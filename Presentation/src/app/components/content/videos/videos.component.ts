import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiGetVideos } from 'src/app/core/videos/videos.actions';
import { selectVideos } from 'src/app/core/videos/videos.selectors';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videos$ = this.store.select(selectVideos);

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.getVideos();
  }

  private getVideos(){
    this.store.dispatch(ApiGetVideos());
  }

}
