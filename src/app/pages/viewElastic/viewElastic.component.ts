import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ElasticSearchService } from 'src/app/services';
import { DatePipe, formatDate } from '@angular/common'

@Component({
  selector: 'view-elastic',
  templateUrl: './viewElastic.component.html',
  styleUrls: ['./viewElastic.component.scss']
})
export class ViewElasticComponent implements OnInit {

  news: any;

  //form: FormGroup;
  private formBuilder: FormBuilder;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  now: Date = new Date();
  date: string
  date1: string
  constructor(private elasticService: ElasticSearchService) {
  }

  reloadData() {
    this.elasticService.findAll().subscribe(
      (response) => {
        this.news = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  form = new FormGroup({
    searchByTittleOrDescription: new FormControl(),
    searchByTittle: new FormControl(),
    date: new FormControl()
  });

  findSearchWord() {
    if (this.form) {
      return this.form.get('searchByTittleOrDescription')?.value;
    }
  }

  findSearch() {
    if (this.form) {
      return this.form.get('searchByTittle')?.value;
    }
  }

  searchByTittleOrDescription(word: string) {
    if (word) {
      this.elasticService.searchByTittleOrDescription(word).subscribe(
        (response) => {
          this.news = response;
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      )
    }
    else this.reloadData();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  onValueChanged(e: { previousValue: any; value: any; }) {
    this.date = this.formatDate(e.value)
  }

  onValueChanged1(e: { previousValue: any; value: any; }) {
    this.date1 = this.formatDate(e.value)
    this.searchByDate(this.date, this.date1)
  }

  searchByDate(date: string, date1: string) {
    console.log(date)
    if (date) {
      this.elasticService.searchByDate(date, date1).subscribe(
        (response) => {
          this.news = response;
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      )
    }
    else this.reloadData();
  }

  searchByTittle(word: string) {
    if (word) {
      this.elasticService.searchByTittle(word).subscribe(
        (response) => {
          this.news = response;
        },
        (error) => {
          console.log(error);
        }
      )
    }
    else this.reloadData();
  }

  reload() {
    this.form.reset();
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