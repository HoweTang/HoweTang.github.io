import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeginStateComponent } from './begin-state/begin-state.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'begin-state'},
  {path: 'begin-state', pathMatch: 'full', component: BeginStateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
