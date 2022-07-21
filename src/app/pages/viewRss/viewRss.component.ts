import { Component, OnInit } from '@angular/core';
import { RssFeedService } from 'src/app/services';
import { RssFeed } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'view-rss',
  templateUrl: './viewRss.component.html',
  styleUrls: ['./viewRss.component.scss']
})
export class ViewRssComponent implements OnInit {

  rssFeeds: Observable<RssFeed[]>;

  constructor(private rssFeedService: RssFeedService) {
  }

  reloadData() {
    this.rssFeeds = this.rssFeedService.findAll();
  }

  delete(id: string) {
    this.rssFeedService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  ngOnInit() {
    this.reloadData();
  }
}