import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRssFeedComponent } from './pages/add-rss-feed';
import { AddRssNewsComponent } from './pages/add-rss-feed-for-news';
import { HomeComponent } from './pages/home';
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
    path: 'viewNews', component: ViewNewsComponent
  },
  {
    path: 'saveRssFeed', component: AddRssFeedComponent
  },
  {
    path: 'viewElastic', component: ViewElasticComponent
  },
  {
    path: 'addRssForNews', component: AddRssNewsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
