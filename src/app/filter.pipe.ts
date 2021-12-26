import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: object[], propName: string, propValue: string): unknown {
    if (value.length === 0 || propValue === '') {
      return value
    }

    return value.filter(item=>{
      return item[propName] === propValue
    })
  }

}
