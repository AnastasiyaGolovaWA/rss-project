import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { ViewRssComponent } from './pages/viewRss';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  { path: 'viewRss', component: ViewRssComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
