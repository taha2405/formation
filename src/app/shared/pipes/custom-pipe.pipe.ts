import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  
  transform(textAdress: string,textFormat:string = " ..." ): any {
   return textAdress.substring(0,9).concat(textFormat);
  }

}
