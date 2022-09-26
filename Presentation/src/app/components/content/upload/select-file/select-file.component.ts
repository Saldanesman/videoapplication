import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VideoService } from 'src/app/service/video.service';
import { IFile } from 'src/app/shared/model/file.model';

@Component({
  selector: 'app-select-file',
  templateUrl: './select-file.component.html',
  styleUrls: ['./select-file.component.css']
})
export class SelectFileComponent implements OnInit {
  @Input() control?: FormControl<IFile | undefined>;
  @Input() buttonText =  'Select file';

  public fileName = '';
  public postRequestIsLoading = false;
  public isFileSelected = false;

  constructor(private readonly videoService: VideoService) { }

  ngOnInit(): void {}

  public selectFile(fileList: FileList | null): void{
    if(fileList){
      const file = fileList[0];
      this.fileName = file.name;

      const formData = new FormData();
      formData.append('file', file, file.name);

      this.postRequestIsLoading = true;
      this.videoService.uploadFile(formData).subscribe(file => {
        this.control?.patchValue(file);
        this.postRequestIsLoading = false;
        this.isFileSelected = true;
      })
    }
  }

  public deleteFile(): void{
    this.control?.patchValue(undefined);
    this.fileName = '';

    this.isFileSelected = false;

    console.log("delete file");
    console.log(this.control);
  }

}
