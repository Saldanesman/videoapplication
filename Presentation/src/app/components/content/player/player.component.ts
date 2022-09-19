import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentVideo } from 'src/app/core/videos/videos.selector';
import { IVideo } from 'src/app/shared/model/video.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DeleteVideoById } from 'src/app/core/videos/videos.action';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  private apiLoaded = false;

  public video?: IVideo;

  public videoId = 'fr1QvKg_6MU';

  constructor(private readonly store: Store,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadYoutubeAPI();

    this.store.select(selectCurrentVideo).subscribe(video => {
      if(video){
        this.video = video;
        this.videoId = this.getVideoId(this.video) ?? this.videoId;
      }
    });
  }

  private getVideoId(video: IVideo): string {
    const params = new URL(video.url).searchParams;
    const videoId = params.get('v');
    return videoId ?? '';
  }

  private loadYoutubeAPI(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  public editVideo(): void{
    console.log("edit video");
  }

  public openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: this.video?.id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
