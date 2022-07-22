import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRssFeedComponent } from './pages/add-rss-feed/add-rss-feed.component';
import { HomeComponent } from './pages/home';
import { ViewRssComponent } from './pages/viewRss';
import { RssFeedService } from './services';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, FormsModule, CommonModule, NgxPaginationModule],
  declarations: [AppComponent, HomeComponent, ViewRssComponent, AddRssFeedComponent],
  providers: [RssFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
