import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Page from "../interfaces/page.interface";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class PlanetsService {
  private configUrl = "https://swapi.co/api/planets";
  private store: Array<Page> = [];

  constructor(private http: HttpClient) {}

  fetchPage(pageIndex, pageElements?): Observable<any> {
    return this.http.get(this.configUrl + "/?page=" + pageIndex)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  searchForPlanet(query): Observable<any> {
    return this.http.get(this.configUrl + "/?search=" + query);
  }

  main(event) {
    console.log(event);

  }
    
}
