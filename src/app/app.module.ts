import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from "./material.module";
import { PlayComponent } from './play/play.component';
import { CongratulationComponent } from './_components/congratulation/congratulation.component';
import { GameoverComponent } from './_components/gameover/gameover.component';
import { TextCardComponent } from './_components/card-types/text-card/text-card.component';
import { ColorCardComponent } from './_components/card-types/color-card/color-card.component';
import { CardComponent } from './_components/card-types/card.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PlayComponent,
    CongratulationComponent,
    GameoverComponent,
    TextCardComponent,
    ColorCardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
