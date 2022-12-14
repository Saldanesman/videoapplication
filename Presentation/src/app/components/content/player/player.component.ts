import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentVideo } from 'src/app/core/videos/videos.selectors';
import { IVideo } from 'src/app/shared/model/video.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DeleteVideoById, UpdateVideo } from 'src/app/core/videos/videos.actions';
import { IUploadVideoForm } from 'src/app/shared/model/video-form.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  private apiLoaded = false;

  public video?: IVideo;

  public videoId = 'fr1QvKg_6MU';

  public editMode = false;
  public formGroup = new FormGroup<IUploadVideoForm>({
    title: new FormControl('', {nonNullable: true, validators: Validators.required}),
    description: new FormControl('', {nonNullable: true, validators: Validators.required}),
    video: new FormControl(undefined, {nonNullable: true, validators: Validators.required}),
    miniature: new FormControl(undefined, {nonNullable: true, validators: Validators.required})
  });

  constructor(private readonly store: Store,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.select(selectCurrentVideo).subscribe(video => {
      if(video){
        this.video = video;
      }
    });
  }

  public editVideo(): void{
    console.log("edit video");
    this.editMode = true; // TODO: Use store.select instead
    this.formGroup.patchValue({
      title: this.video?.title,
      description: this.video?.description,
      video: this.video?.video,
      miniature: this.video?.miniature
    });
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

  public saveChanges(): void {
    if(!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    console.log('save changes');
    const value = this.formGroup.value;
    const videoUpdated: IVideo= {
      id: this.video?.id!,
      title: value.title!,
      description: value.description!,
      video: value.video!,
      miniature: value.miniature!
    };
    console.log('save changes', videoUpdated);
    this.store.dispatch(UpdateVideo({video: videoUpdated}));
    this.editMode = false; // TODO: Use store.select instead
  }

  public cancelEdit(): void {
    console.log('Cancel edit');
    this.editMode = false; // TODO: Use store.select instead
  }

}
