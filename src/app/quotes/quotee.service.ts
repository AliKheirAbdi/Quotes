import { Injectable } from '@angular/core';
import { Quotes } from '../quotes';

@Injectable()
export class QuoteeService {

  getQuotes(){
    return Quotes;
  }

}
