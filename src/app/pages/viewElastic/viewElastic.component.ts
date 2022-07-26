import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ElasticSearchService } from 'src/app/services';

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
    searchByTittleOrDescription: new FormControl()
  });

  findSearchWord() {
    if (this.form) {
      return this.form.get('searchByTittleOrDescription')?.value;
    }
  }

  searchByTittleOrDescription(word: string) {
    if (word) {
      this.elasticService.searchByTittleOrDescription(word).subscribe(
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