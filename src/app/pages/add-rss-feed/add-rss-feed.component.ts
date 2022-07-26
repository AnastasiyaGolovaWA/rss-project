
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { RssFeed } from "src/app/models";
import { NewsFeedService, RssFeedService } from "src/app/services";

@Component({
  selector: 'app-add-rss-feed',
  templateUrl: './add-rss-feed.component.html',
  styleUrls: ['./add-rss-feed.component.scss']
})

export class AddRssFeedComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  rssFeed: RssFeed[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private rssFeedService: RssFeedService,
    private newsService: NewsFeedService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      currentPosition: ['', Validators.required],
      url: ['', Validators.required],
      dateCreated: ['', Validators.required],
      dateUpdated: ['', Validators.required]
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
    this.rssFeedService
      .save(this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {

          this.router.navigate(['/viewRss'], { relativeTo: this.route });
        },
        (error) => {
          this.loading = false;
        }
      );

    this.newsService.addRss(this.rssFeed);
  }

  onCancel() {
    this.router.navigate(['/viewRss']);
  }
}
