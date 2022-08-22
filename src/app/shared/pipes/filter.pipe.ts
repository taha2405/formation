import { Pipe, PipeTransform } from '@angular/core';
import { Users } from 'src/app/model/model.users';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Users[], filterText: string): Users[] {
    if(filterText===""){
    return array;
  }else
  {
    return array.filter(user=> user.firstName.toLowerCase().includes(filterText.toLowerCase()) || 
    user.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
    user.email.toLowerCase().includes(filterText.toLowerCase()) ||
    user.adress.toLowerCase().includes(filterText.toLowerCase()))
  }
  }

}
