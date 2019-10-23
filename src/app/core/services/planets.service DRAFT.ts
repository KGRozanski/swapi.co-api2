import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Page from "../interfaces/page.interface";
import PageFactory from "../../core/models/page.model";
@Injectable({
  providedIn: "root"
})
export class PlanetsService {
  private configUrl = "https://swapi.co/api/planets";
  private store: Array<Page> = [];

  constructor(private http: HttpClient) {}

  fetchPage(pageIndex) {
    return this.http.get(this.configUrl + "/?page=" + pageIndex).toPromise();
  }

  searchForPlanet(query) {
    return this.http.get(this.configUrl + "/?search=" + query).toPromise();
  }

  main(event) {
    console.log(event);
    const offset = (event.pageIndex + 1 - 1) * event.pageSize;
    console.log("Offset: " + offset + " PageN: " + offset / event.pageSize + 1);

    switch (event.pageSize) {
      case 5:
        console.log("fives");
        if(this.store[event.previousPageIndex] == undefined) {
          return new Promise(resolve => {
            resolve(
              this.fetchPage(event.previousPageIndex + 1)
                .then(data => {
                  let downloadedPage = new PageFactory().create(data as Page);
                  this.store.push(downloadedPage);
                  console.log(this.store);
                  return {
                    result: this.store[event.pageIndex]["results"].slice(0,5),
                    count: data["count"]
                  };
                })
                .catch(err => {
                  window.alert("Service currently unavailable!");
                })
            );
          });
        } else {
          if((event.pageIndex +1) %2 == 1) {
            return new Promise(resolve => {
              resolve({
                result: this.store[event.previousPageIndex]["results"].slice(0,5)
              });
            });
          } else {
            return new Promise(resolve => {
              resolve({
                result: this.store[event.previousPageIndex]["results"].slice(5,10)
              });
            });
          }
          
        }
        break;

      case 25:
        console.log("25");
        break;

      case 100:
        console.log("100");
        break;

      default:
        if (this.store[event.pageIndex] == undefined) {
          return new Promise(resolve => {
            resolve(
              this.fetchPage(event.pageIndex + 1)
                .then(data => {
                  let downloadedPage = new PageFactory().create(data as Page);
                  this.store.push(downloadedPage);
                  console.log(this.store);
                  return {
                    result: this.store[event.pageIndex]["results"],
                    count: data["count"]
                  };
                })
                .catch(err => {
                  window.alert("Service currently unavailable!");
                })
            );
          });
        } else {
          return new Promise(resolve => {
            resolve({
              result: this.store[event.pageIndex]["results"]
            });
          });
        }
    }
  }
}
