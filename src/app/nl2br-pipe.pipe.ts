import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2brPipe'
})
export class Nl2brPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
  }

}
