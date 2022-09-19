import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DeleteVideoById } from 'src/app/core/videos/videos.action';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              private readonly store: Store) { }

  ngOnInit(): void {
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public confirm(): void {
    console.log('Confirm delete id: ', this.data);
    this.store.dispatch(DeleteVideoById({ id: this.data}));
    this.cancel();
  }

}
