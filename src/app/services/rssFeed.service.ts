import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RssFeed } from '../models';

@Injectable()
export class RssFeedService {

    private rssFeedsUrl: string;

    constructor(private http: HttpClient) {
        this.rssFeedsUrl = 'http://localhost:8080/rssFeed';
    }

    public findAll(): Observable<RssFeed[]> {
        return this.http.get<RssFeed[]>(`${this.rssFeedsUrl + '/getAll'}`);
    }

    public save(rssFeed: Object): Observable<Object> {
        return this.http.post(`${this.rssFeedsUrl + '/add'}`, rssFeed);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`${this.rssFeedsUrl + '/delete'}/${id}`, { responseType: 'text' });
    }

    public updateCurrentValue(id: string, value: any): Observable<any> {
        return this.http.put(`${this.rssFeedsUrl + '/changeCurrentPosition'}/${id}`, value);
    }
}