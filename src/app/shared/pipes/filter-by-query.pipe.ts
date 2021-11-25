import {Pipe, PipeTransform} from '@angular/core';
import {IData} from "../models/data.model";

@Pipe({
  name: 'filterByQuery'
})
export class FilterByQueryPipe implements PipeTransform {

  transform(value: IData[], args: string): IData[] {
    return value.filter((type => type.type.includes(args)))
  }

}
