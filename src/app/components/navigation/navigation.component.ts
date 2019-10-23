import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import Page from "src/app/core/interfaces/page.interface";
import { PlanetsService } from "src/app/core/services/planets.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {

  constructor(private ps: PlanetsService) {}
  private searchBarValue: string = "";


  // MatPaginator Inputs
  private pageSize = 10;
  private pageSizeOptions: number[] = [5, 10, 25, 100];

  @Input() page: Page;
  @Input() length: string;

  ngOnInit() {}
  
  setPageSizeOptions(setPageSizeOptionsInput: any) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

  onType(event: KeyboardEvent) {
    this.searchBarValue = (event.target as HTMLInputElement).value;
    this.searchEvent.emit(this.searchBarValue);
  }
  onNavigationChange(event) {
    this.navigationEvent.emit(event);
  }

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() navigationEvent: EventEmitter<Object> = new EventEmitter<Object>();
}
