import {Component, OnDestroy, OnInit} from '@angular/core';
import {IData} from "../../shared/models/data.model";
import {Subscription} from "rxjs";
import {StateDataService} from "../services/state-data.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnDestroy {
  public filterData: IData[] = [];
  private sub!: Subscription;

  constructor(private stateDataService: StateDataService,) {
  }

  ngOnInit(): void {
    this.sub = this.stateDataService.filterMockedData$.subscribe(data => {
      this.filterData = data
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
