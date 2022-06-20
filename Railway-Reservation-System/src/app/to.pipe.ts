import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tO'
})
export class TOPipe implements PipeTransform {

  transform(value: any, ToFilter: string): any {
    if(!value) return null;
    if(!ToFilter)return value;
    ToFilter= ToFilter.toLowerCase();
    return value.filter((f:any)=>JSON.stringify(f).toLocaleLowerCase().includes(ToFilter))
  }

}
