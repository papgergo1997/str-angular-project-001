import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universalFilter'
})
export class UniversalFilterPipe implements PipeTransform {

  transform(value: any[], key: string, phrase: string | number | boolean): any[] {
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }

    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    return value.filter(item => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      return ('' + item[key]).toLowerCase().includes((phrase as string));
    })
  }

}
