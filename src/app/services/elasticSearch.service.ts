import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ElasticSearchService {

    private newsUrl: string;

    constructor(private http: HttpClient) {
        this.newsUrl = 'http://localhost:8080/api';
    }

    public findAll(): Observable<any> {
        return this.http.get(`${this.newsUrl + '/getAll'}`);
    }

    public searchByTittleOrDescription(tittle: string, description: string): Observable<any> {
        return this.http.get(`${this.newsUrl + '/news/searchByTittleOrDescription?tittle=' + tittle + '&description=' + description}`);
    }

    public searchByDate(date: string, date1: string): Observable<any> {
        return this.http.get(`${this.newsUrl + '/date?date=' + date + '&date1=' + date1}`);
    }
}