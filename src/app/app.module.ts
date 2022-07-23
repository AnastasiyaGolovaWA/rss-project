import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRssNewsComponent } from './pages/add-rss-feed-for-news';
import { AddRssFeedComponent } from './pages/add-rss-feed/add-rss-feed.component';
import { HomeComponent } from './pages/home';
import { ViewElasticComponent } from './pages/viewElastic/viewElastic.component';
import { ViewNewsComponent } from './pages/viewNews/viewNews.component';
import { ViewRssComponent } from './pages/viewRss';
import { ElasticSearchService, NewsFeedService, RssFeedService } from './services';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, FormsModule, CommonModule, NgxPaginationModule],
  declarations: [AppComponent, HomeComponent, ViewRssComponent, AddRssFeedComponent, ViewNewsComponent, ViewElasticComponent, AddRssNewsComponent],
  providers: [RssFeedService, NewsFeedService, ElasticSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
