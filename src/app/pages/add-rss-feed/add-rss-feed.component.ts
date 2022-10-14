
import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { RssFeedService } from "src/app/services";

@Component({
  selector: 'app-add-rss-feed',
  templateUrl: './add-rss-feed.component.html',
  styleUrls: ['./add-rss-feed.component.scss']
})

export class AddRssFeedComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  myDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private rssFeedService: RssFeedService
  ) { 
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      currentPosition: ['', Validators.required],
      url: ['', Validators.required],
      dateCreated: this.myDate,
      dateUpdated: ['']
    });
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
  }

  onCancel() {
    this.router.navigate(['/viewRss']);
  }
}
