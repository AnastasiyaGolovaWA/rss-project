
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { RssFeed } from "src/app/models";
import { NewsFeedService, RssFeedService } from "src/app/services";

@Component({
  selector: 'app-add-rss-news',
  templateUrl: './add-rss-news.component.html',
  styleUrls: ['./add-rss-news.component.scss']
})

export class AddRssNewsComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  rssFeed: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private rssFeedService: RssFeedService,
    private newsService: NewsFeedService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      feeds: ['', Validators.required]
    });
    this.rssFeedService.findAll().subscribe(
      (response) => {
        this.rssFeed = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    if (control)
      return control.invalid && control.dirty;
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.invalid) {
      console.log(this.form.errors);
      return;
    }

    this.loading = true;
    this.newsService
      .addRss(this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {

          this.router.navigate(['/viewNews'], { relativeTo: this.route });
        },
        (error) => {
          this.loading = false;
        }
      );
  }

  onCancel() {
    this.router.navigate(['/viewNews']);
  }
}
