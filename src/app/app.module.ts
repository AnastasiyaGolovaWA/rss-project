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
import { CalendarComponent } from './pages/calendar';
import { InfoComponent } from './pages/info';
import { ViewElasticComponent } from './pages/viewElastic/viewElastic.component';
import { ViewNewsComponent } from './pages/viewNews/viewNews.component';
import { ViewRssComponent } from './pages/viewRss';
import { ElasticSearchService, NewsFeedService, RssFeedService } from './services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'; 
import { DxButtonModule } from 'devextreme-angular';
import { DxCalendarModule } from 'devextreme-angular';
import { DxDateBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule,
    FormsModule, 
    CommonModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    DxButtonModule,
    DxCalendarModule,
    DxDateBoxModule
  ],
  declarations: [AppComponent, HomeComponent, ViewRssComponent, AddRssFeedComponent, ViewNewsComponent, ViewElasticComponent, InfoComponent, CalendarComponent],
  providers: [RssFeedService, NewsFeedService, ElasticSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
