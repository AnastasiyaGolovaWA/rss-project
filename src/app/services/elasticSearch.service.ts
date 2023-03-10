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

    public searchByTittleOrDescription(tittle: string, description: string, date: string, date1: string): Observable<any> {
        let url = `${this.newsUrl}/news/searchByTittleOrDescription?`;

        if (tittle) {
            url += `tittle=${tittle}&`;
        }

        if (description) {
            url += `description=${description}&`;
        }

        if (date) {
            url += `date_=${date}&`;
        }

        if (date1) {
            url += `date1_=${date1}&`;
        }

        url = url.slice(0, -1);

        return this.http.get(url);
    }


    public searchByDate(date: string, date1: string): Observable<any> {
        return this.http.get(`${this.newsUrl + '/date?date=' + date + '&date1=' + date1}`);
    }
}