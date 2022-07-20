import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home';
import { ViewRssComponent } from './pages/viewRss';
import { RssFeedService } from './services';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, DxDataGridModule, FormsModule, CommonModule],
  declarations: [AppComponent, HomeComponent, ViewRssComponent],
  providers: [RssFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
