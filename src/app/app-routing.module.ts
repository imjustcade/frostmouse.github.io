import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { GamesComponent } from './games';
import { HomeComponent } from './home';
import { PrivacyComponent } from './privacy';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vain-miner-privacy', component: PrivacyComponent },
  { path: 'vain-miner-terms', component: TermsComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
