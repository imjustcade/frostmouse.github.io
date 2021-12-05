import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GamesComponent } from './games';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AboutComponent } from './about';
import { PrivacyComponent } from './privacy';
import { TermsComponent } from './terms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    ContactComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
