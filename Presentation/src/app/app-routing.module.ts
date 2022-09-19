import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/content/player/player.component';
import { UploadComponent } from './components/content/upload/upload.component';
import { VideosComponent } from './components/content/videos/videos.component';

const routes: Routes = [
  { path: '', component: VideosComponent },
  { path: 'upload-video', component: UploadComponent },
  { path: 'play-video', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }