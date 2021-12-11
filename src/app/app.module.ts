import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, SharedImages } from './app.component';
import { GamesComponent } from './games';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AboutComponent } from './about';
import { PrivacyComponent } from './privacy';
import { TermsComponent } from './terms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { openImageDialog, VainMinerComponent } from './games/Vain Miner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    ContactComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    VainMinerComponent,
    openImageDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [SharedImages],
  bootstrap: [AppComponent],
  entryComponents: [openImageDialog]
})
export class AppModule { }
