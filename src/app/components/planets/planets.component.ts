import { Component, OnInit, Input } from "@angular/core";
import Planet from "src/app/core/interfaces/planet.interface";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"]
})
export class PlanetsComponent implements OnInit {
  @Input() planets: Array<Planet>;

  constructor() {}

  ngOnInit() {}
}
