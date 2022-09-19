import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UploadVideo } from 'src/app/core/videos/videos.action';
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
    url: new FormControl('', {nonNullable: true, validators: Validators.required}),
    image: new FormControl('', {nonNullable: true, validators: Validators.required})
  });

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
  }

  /* public selectFile(fileList: FileList | null): void{
    if(fileList){
      const file = fileList[0];
      this.formGroup.controls.image.patchValue(file);
      this.formGroup.controls.image.updateValueAndValidity();
      this.isFileSelected = true;
    }
    console.log("upload file");
    console.log(this.formGroup);
  }

  public deleteFile(): void{
    this.formGroup.controls.image.patchValue(undefined);
    this.isFileSelected = false;
    console.log("delete file");
    console.log(this.formGroup);
  } */

  public submitForm(): void{
    const value = this.formGroup.value;
    const videoData: IVideo = {
      title: value.title!,
      description: value.description!,
      videoUrl: value.url!,
      miniatureUrl: value.image!
    };

    console.log("upload form: ", videoData);
    this.store.dispatch(UploadVideo({video: videoData}));
  }

}
