import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about';
import { GamesComponent } from './games';
import { VainMinerComponent } from './games/Vain Miner';
import { HomeComponent } from './home';
import { PrivacyComponent } from './privacy';
import { TermsComponent } from './terms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vain-miner-privacy', component: PrivacyComponent },
  { path: 'vain-miner-terms', component: TermsComponent },
  { path: 'games/VainMiner', component: VainMinerComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
