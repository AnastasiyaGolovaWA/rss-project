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

    public findAll(): Observable<any> {
        return this.http.get(`${this.rssFeedsUrl + '/getAll'}`);
    }

    public save(rssFeed: RssFeed) {
        return this.http.post<RssFeed>(this.rssFeedsUrl + '/add', rssFeed);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`${this.rssFeedsUrl + '/delete'}/${id}`, { responseType: 'text' });
    }
}