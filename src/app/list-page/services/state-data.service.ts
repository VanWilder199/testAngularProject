import {Injectable} from '@angular/core';
import {IData} from "../../shared/models/data.model";
import {HttpDataService} from "./http-data.service";
import {BehaviorSubject} from "rxjs";
import {enumData} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class StateDataService {
  private filterMockedData: IData[] = [];
  private filterMockedData$$ = new BehaviorSubject(this.filterMockedData);
  filterMockedData$ = this.filterMockedData$$.asObservable();

  constructor(private handleData: HttpDataService) {}

  initData(value: number) {
    this.handleData.getJSON()
      .subscribe(mock => {
        this.filterMockedData = mock.data.filter(data => {
          return data.type === enumData[value]
        })
        this.filterMockedData$$.next(this.filterMockedData);
      })
  }
}
