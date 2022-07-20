import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { RssFeed } from '../models';

@Injectable()
export class RssFeedService {

    private rssFeedsUrl: string;

    constructor(private http: HttpClient) {
        this.rssFeedsUrl = 'http://localhost:8080/rssFeed';
    }

    public findAll(): Observable<RssFeed[]> {
        return this.http.get<RssFeed[]>(this.rssFeedsUrl + '/getAll');
    }
}