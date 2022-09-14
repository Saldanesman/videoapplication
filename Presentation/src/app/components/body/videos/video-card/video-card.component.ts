import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from 'src/app/shared/model/video.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  @Input() video?: IVideo;

  constructor() { }

  ngOnInit(): void {
  }

}
