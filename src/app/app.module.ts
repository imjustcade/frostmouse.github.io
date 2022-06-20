import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, SharedImages } from './app.component';
import { GamesComponent } from './games';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { IMAPrivacyComponent } from './privacy/IMAPrivacy.component';
import { PolyPrivacyComponent } from './privacy/polyPrivacy.component';
import { TermsComponent } from './terms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IMAOpenImageDialog, IMAMinerComponent } from './games/IMAMiner';
import { polyOpenImageDialog, PolyvadeComponent } from './games/Polyvade';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    AboutComponent,
    IMAPrivacyComponent,
    PolyPrivacyComponent,
    TermsComponent,
    IMAMinerComponent,
    IMAOpenImageDialog,
    PolyvadeComponent,
    polyOpenImageDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [SharedImages],
  bootstrap: [AppComponent],
  entryComponents: [
    IMAOpenImageDialog,
    polyOpenImageDialog
  ]
})
export class AppModule { }
