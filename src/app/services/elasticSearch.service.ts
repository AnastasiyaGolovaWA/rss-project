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

    public searchByTittle(tittle: string): Observable<any> {
        return this.http.get(`${this.newsUrl + '/news/' + tittle}`);
    }

    public searchByTittleOrDescription(word: string): Observable<any> {
        return this.http.get(`${this.newsUrl + '/news?q=' + word}`);
    }
}