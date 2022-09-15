import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideosComponent } from './components/content/videos/videos.component';
import { UploadComponent } from './components/content/upload/upload.component';
import { PlayerComponent } from './components/content/player/player.component';
import { MaterialModule } from './material/material.module';
import { VideoCardComponent } from './components/content/videos/video-card/video-card.component';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './core/app-state.reducer';
import { effects } from './core/app-state.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideosComponent,
    UploadComponent,
    PlayerComponent,
    VideoCardComponent,
    ContentComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
