import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Yu} from '../yu-class/yu';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

 
    yu:Yu;

  constructor(private http:HttpClient) { 
    this.yu=new Yu("","");
  }
}