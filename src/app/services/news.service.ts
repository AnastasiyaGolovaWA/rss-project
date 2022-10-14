import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RssFeed } from '../models';

@Injectable()
export class NewsFeedService {

    private newsUrl: string;
    private rssNewsUrl: string;

    constructor(private http: HttpClient) {
        this.newsUrl = 'http://localhost:8080/news';
        this.rssNewsUrl = 'http://localhost:8080/rssNews'
    }

    public findAll(): Observable<any> {
        return this.http.get(`${this.newsUrl + '/getAll'}`);
    }

    public rssNewsClear(): Observable<any> {
        return this.http.put(`${this.rssNewsUrl + '/clear'}`, {});
    }

    public clearNews(): Observable<any> {
        return this.http.put(`${this.newsUrl + '/clear'}`, {});
    }

    public addRss(rssFeed: RssFeed[]): Observable<any> {
        return this.http.post(`${this.newsUrl + '/add'}`, rssFeed);
    }
}