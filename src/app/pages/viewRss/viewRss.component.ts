import { Component, OnInit } from '@angular/core';
import { RssFeed } from 'src/app/models';
import { NewsFeedService, RssFeedService } from 'src/app/services';

@Component({
  selector: 'view-rss',
  templateUrl: './viewRss.component.html',
  styleUrls: ['./viewRss.component.scss']
})
export class ViewRssComponent implements OnInit {

  rssFeeds: RssFeed[];

  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private rssFeedService: RssFeedService, private newsService: NewsFeedService) {
  }

  reloadData() {
    this.rssFeedService.findAll().subscribe(
      (response) => {
        this.rssFeeds = response;
        console.log(this.rssFeeds);
        this.newsService.addRss(this.rssFeeds);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.reloadData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.reloadData();
  }

  getCurrentValue(position: boolean) {
    if (position == true) {
      return "Включена"
    }
    if (position == false) {
      return "Выключена"
    }
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

  update(id: string, value: boolean) {
    this.rssFeedService.updateDate(id, !value)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    this.reloadData();
    this.rssFeedService.updateCurrentValue(id, !value)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    this.reloadData();
  }

  ngOnInit() {
    this.reloadData();
  }
}