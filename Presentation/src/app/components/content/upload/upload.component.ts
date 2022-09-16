import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IUploadVideoForm } from 'src/app/shared/model/video-form.model';

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
    image: new FormControl(null, {nonNullable: true, validators: Validators.required})
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectFile(fileList: FileList | null): void{
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
    this.formGroup.controls.image.patchValue(null);
    this.isFileSelected = false;
    console.log("delete file");
    console.log(this.formGroup);
  }

  public submitForm(): void{
    console.log("submit");
    console.log(this.formGroup.valid);
    console.log(this.formGroup);
  }

}
