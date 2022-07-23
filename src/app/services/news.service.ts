import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewsFeedService {

    private newsUrl: string;

    constructor(private http: HttpClient) {
        this.newsUrl = 'http://localhost:8080/news';
    }

    public findAll(): Observable<any> {
        return this.http.get(`${this.newsUrl + '/getAll'}`);
    }

    public findByTittleOrDesc(tittle: string, description: string): Observable<any> {
        return this.http.get(`${this.newsUrl + '/showByParametres'}`);
    }
}