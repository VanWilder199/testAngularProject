import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IData} from "../../../shared/models/data.model";

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTableComponent  {
  @Input() filteredData: IData[] = []
}
