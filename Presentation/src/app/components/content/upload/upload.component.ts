import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UploadVideo } from 'src/app/core/videos/videos.actions';
import { IUploadVideoForm } from 'src/app/shared/model/video-form.model';
import { IVideo } from 'src/app/shared/model/video.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public isFileSelected = false;

  public formGroup = new FormGroup<IUploadVideoForm>({
    title: new FormControl('', {nonNullable: true, validators: Validators.required}),
    description: new FormControl('', {nonNullable: true, validators: Validators.required}),
    video: new FormControl(undefined, {nonNullable: true, validators: Validators.required}),
    miniature: new FormControl(undefined, {nonNullable: true, validators: Validators.required})
  });

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {}

  public submitForm(): void{
    if(!this.formGroup.valid) {
      console.log("Is valid the form? ", this.formGroup.valid, this.formGroup);
      this.formGroup.markAllAsTouched();
      return;
    }

    const value = this.formGroup.value;
    const videoData: IVideo = {
      title: value.title!,
      description: value.description!,
      video: value.video!,
      miniature: value.miniature!
    };

    console.log("upload form: ", videoData);
    this.store.dispatch(UploadVideo({video: videoData}));
  }

}
