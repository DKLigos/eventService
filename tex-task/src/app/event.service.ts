import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable()
export class EventService{
  url = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {}

  postEvent(event): Observable<any>{
    return this.http.post(`${this.url}/add`, event);
  }

  searchEvent(term): Observable<any>{
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get(`${this.url}/search/${term}`);
  }

}
