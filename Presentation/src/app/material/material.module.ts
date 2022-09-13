import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatDividerModule
];

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }