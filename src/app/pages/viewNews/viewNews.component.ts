import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from 'src/app/services';

@Component({
  selector: 'view-news',
  templateUrl: './viewNews.component.html',
  styleUrls: ['./viewNews.component.scss']
})
export class ViewNewsComponent implements OnInit {

  news: any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private newsService: NewsFeedService) {
  }

  reloadData() {
    this.newsService.findAll().subscribe(
      (response) => {
        this.news = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchByParameters(tittle: string, description: string) {
    this.newsService.findByTittleOrDesc(tittle, description)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    this.reloadData();
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

  ngOnInit() {
    this.reloadData();
  }
}