import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'from'
})
export class FromPipe implements PipeTransform {

  transform(value: any, FromFilter: string): any {
  if(!value) return null;
  if(!FromFilter)return value;
   FromFilter= FromFilter.toLowerCase();
     return value.filter((f:any)=>JSON.stringify(f).toLocaleLowerCase().includes(FromFilter))
   }

//   transform(value: any, fromFilter: string): any {
//   if(value.length === 0   || fromFilter==='')
//   {
//     return value;
//   }
//   const traindetails$ =[];
//   for(const f of value){
//     if(f['From'] === fromFilter ){

//       traindetails$.push(f);
//     }
//   }
// return traindetails$;
//   }


}
