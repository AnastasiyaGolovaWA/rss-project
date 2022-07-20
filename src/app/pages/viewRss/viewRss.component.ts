import { Component, OnInit } from '@angular/core';
import { RssFeedService } from 'src/app/services';
import { RssFeed } from 'src/app/models';

@Component({
  selector: 'view-rss',
  templateUrl: './viewRss.component.html',
  styleUrls: ['./viewRss.component.scss']
})
export class ViewRssComponent implements OnInit {

  rssFeeds: RssFeed[];

  constructor(private rssFeedService: RssFeedService) {
  }

  ngOnInit() {
    this.rssFeedService.findAll().subscribe(data => {
      this.rssFeeds = data;
    });
  }
}