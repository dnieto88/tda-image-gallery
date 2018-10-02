import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {TDAImage} from './tdaimage';
import {THUMBNAILS} from './tdaImageApi.mock';
import {map} from 'rxjs/operators';
import {TDAComment} from './tdacomment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TDAImageService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<TDAImage[]> {
    return of( THUMBNAILS );
  }
  getById(id: number): Observable<TDAImage> {
    return this.getAll().pipe(
      map(tdaImages => tdaImages.find(tdaImage => tdaImage.id === +id))
    );
    // return of( THUMBNAILS.find( thumbnail => thumbnail.id === id));
  }
  addComment(id: number, comment: TDAComment) {
    const body = JSON.stringify(comment);
    return this.http.put(`asfasdfasdfasdf.casdf/asf/${id}`, body, httpOptions);
  }
}
