import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/service/video.service';
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

  constructor(private readonly videoService: VideoService,
              private readonly router: Router) {
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
    console.log("submit");

    const value = this.formGroup.value;
    const videoUpdated= {
      title: value.title!,
      description: value.description!,
      videoUrl: value.url!,
      miniatureUrl: value.image!
    };

    this.videoService.createVideo(videoUpdated).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
