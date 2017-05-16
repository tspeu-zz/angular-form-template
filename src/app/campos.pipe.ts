import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campos'
})
export class CamposPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
