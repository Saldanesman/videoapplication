import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetCurrentVideo } from 'src/app/core/videos/videos.actions';
import { IVideo } from 'src/app/shared/model/video.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  @Input() video?: IVideo;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  public storeVideo(): void {
    if(this.video){
      this.store.dispatch(SetCurrentVideo({video: this.video}));
    }
  }

}
