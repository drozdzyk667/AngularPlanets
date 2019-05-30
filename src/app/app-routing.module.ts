import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondPlanetsComponent } from './second-planets/second-planets.component';
import { FirstPlanetsComponent } from './first-planets/first-planets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/first-planets', pathMatch: 'full' },
{ path: 'second-planets', component: SecondPlanetsComponent },
{ path: 'first-planets', component: FirstPlanetsComponent },
{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstPlanetsComponent, SecondPlanetsComponent, PageNotFoundComponent]
