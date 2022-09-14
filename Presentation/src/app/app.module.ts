import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideosComponent } from './components/body/videos/videos.component';
import { UploadComponent } from './components/body/upload/upload.component';
import { PlayerComponent } from './components/body/player/player.component';
import { MaterialModule } from './material/material.module';
import { VideoCardComponent } from './components/body/videos/video-card/video-card.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './core/app-state.reducer';
import { effects } from './core/app-state.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideosComponent,
    UploadComponent,
    PlayerComponent,
    VideoCardComponent,
    BodyComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
