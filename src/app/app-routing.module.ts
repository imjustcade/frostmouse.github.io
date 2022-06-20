import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about';
import { GamesComponent } from './games';
import { IMAMinerComponent } from './games/IMAMiner';
import { PolyvadeComponent } from './games/Polyvade';
import { HomeComponent } from './home';
import { IMAPrivacyComponent } from './privacy';
import { PolyPrivacyComponent } from './privacy/polyPrivacy.component';
import { TermsComponent } from './terms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'IMAMinerPrivacy', component: IMAPrivacyComponent },
  { path: 'PolyPrivacy', component: PolyPrivacyComponent },
  { path: 'IMAMinerTerms', component: TermsComponent },
  { path: 'games/IMAMiner', component: IMAMinerComponent },
  { path: 'games/Polyvade', component: PolyvadeComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
