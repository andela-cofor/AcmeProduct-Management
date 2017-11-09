import {Pipe} from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertSpacesPipe {

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
