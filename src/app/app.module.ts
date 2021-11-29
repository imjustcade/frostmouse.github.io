import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GamesComponent } from './games';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AboutComponent } from './about';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
