import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToNaPipe'
})
export class NullToNaPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return (value==null?'n.a.':value);
  }

}
