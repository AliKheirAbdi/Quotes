import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
 transform(value: any): number {

    let today:any = new Date();
    var difference = Math.abs(today-value);
    const secondsPerDay = 86400;
    var dateDifferenceSeconds = difference*0.001;
    var dateCounter = Math.round(dateDifferenceSeconds/secondsPerDay);

    if (dateCounter >= 1) {
      return dateCounter - 1;
    }
    else{
      return 0;
    }
  }

}
