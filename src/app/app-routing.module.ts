import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRssFeedComponent } from './pages/add-rss-feed';
import { HomeComponent } from './pages/home';
import { InfoComponent } from './pages/info';
import { ViewElasticComponent } from './pages/viewElastic';
import { ViewNewsComponent } from './pages/viewNews';
import { ViewRssComponent } from './pages/viewRss';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'viewRss', component: ViewRssComponent
  },
  {
    path: 'info', component: InfoComponent
  },
  {
    path: 'viewNews', component: ViewNewsComponent
  },
  {
    path: 'saveRssFeed', component: AddRssFeedComponent
  },
  {
    path: 'viewElastic', component: ViewElasticComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
