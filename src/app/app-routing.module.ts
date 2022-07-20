import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRssComponent } from './pages/viewRss';

const routes: Routes = [
  { path: 'viewRss', component: ViewRssComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
