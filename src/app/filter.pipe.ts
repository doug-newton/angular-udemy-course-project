import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  //  impure pipe this pipe will rerun whenever anything on the page changes
  //  this could result in high performance costs
  pure: false
  //  default is a pure pipe - only runs once
  //  pure: true
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
