import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: string): any {
    const trimmed = value.replace(/\s+/g, '');
    const numbers = [];

    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    return numbers.join(' ');
  }

}
