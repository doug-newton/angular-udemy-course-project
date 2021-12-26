import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: object[], propName: string): object[] {
    return value.sort((a, b)=>{
      if (a[propName] > b[propName]) {
        return 1
      }
      else {
        return -1
      }
    })
  }

}
