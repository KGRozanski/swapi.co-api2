import { Component, OnInit } from "@angular/core";
import { PlanetsService } from "./core/services/planets.service";
import PageFactory from "./core/models/page.model";
import Page from "./core/interfaces/page.interface";
import Planet from "./core/interfaces/planet.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private title = "elonMusk";

  private cachedPages = Array();

  //------------------------------
  private paginatedPlanets: Array<Planet> = [];
  private length = null;
  private startingEvent = {
    count: null,
    pageIndex: 0,
    pageSize: 10,
    previousPageIndex: 0
  };

  constructor(private ps: PlanetsService) {}

  ngOnInit() {
    this.ps.main(this.startingEvent);
    this.ps.fetchPage(1).subscribe((res) => {
      console.log(res);
    })
  }


  // searchPlanet(event) {
  //   this.ps.searchForPlanet(event).then(data => {
  //     this.page = new PageFactory().create(data as Page);
  //   });
  // }

  // navigationEvent(event) {
  //   this.ps.main(event).then(value => {
  //     console.log("Paginated planets from ps: " + value);
  //     this.paginatedPlanets = [];
  //     //Fill paginated planets with retrieved planets
  //     value["result"].forEach(element => {
  //       this.paginatedPlanets.push(element as Planet);
  //     });
  //   });
  // }
}

  console.log((this.pageIterator + 1 < Math.ceil(this.page.count / 10)).toString());
  if (this.paginatedPlanets.length < event.pageIndex + 1 * event.pageSize) {
    if(this.pageIterator + 1 < Math.ceil(this.page.count / 10)) {
      this.getPage(event.pageIndex + this.pageIterator).then(value => {
        this.paginatedPlanets.push(...value["results"]);
        this.pageIterator++;
        this.navigationEvent(event);
        console.log(...value["results"]);
      });
    } else {
      return;
    }
  } else {
    this.planetsOutput = [];
    for (let i = 0; i < event.pageSize; i++) {
      this.planetsOutput.push(this.paginatedPlanets[i]);
    }
    console.log(this.planetsOutput);
    return;
  }
}
