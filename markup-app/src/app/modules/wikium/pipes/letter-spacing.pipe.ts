import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterSpacing'
})
export class LetterSpacingPipe implements PipeTransform {

  transform(text: string): unknown {
    return text.split('').join(`ؐ `);
  }
}
