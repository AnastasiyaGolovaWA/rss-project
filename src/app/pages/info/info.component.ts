import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ElasticSearchService } from 'src/app/services';

@Component({
  selector: 'view-info',
  templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}