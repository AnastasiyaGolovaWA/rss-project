import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RssFeed } from '../models';

@Injectable()
export class NewsFeedService {

    private newsUrl: string;

    constructor(private http: HttpClient) {
        this.newsUrl = 'http://localhost:8080/news';
    }

    public findAll(): Observable<any> {
        return this.http.get(`${this.newsUrl + '/getAll'}`);
    }

    public clearNews(): Observable<any> {
        return this.http.put(`${this.newsUrl + '/clear'}`, {});
    }

    public addRss(rssFeed: RssFeed[]): Observable<Object> {
        return this.http.post(`${this.newsUrl + '/add'}`, rssFeed);
    }
}