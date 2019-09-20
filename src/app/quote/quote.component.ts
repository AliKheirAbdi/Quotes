import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { Quotes } from '../quotes';
import {QuoteeService} from '../quotes/quotee.service';
import {AlertsService} from '../alert-service/alerts.service';
import {HttpClient} from '@angular/common/http';
import {QuoteRequestService} from '../quote-http/quote-request.service';

import {Yu} from '../yu-class/yu';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',

   providers: [QuoteeService, QuoteRequestService],
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(quoteeService: QuoteeService, alertService: AlertsService, private http: HttpClient) {

  this.quotes = quoteeService.getQuotes();
  this.alertService = alertService; // make the service available to the class

  }

yu: Yu;



  quotes: Quote[];
    alertService: AlertsService;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

    toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

    deleteQuote(isComplete, index) {

    if (isComplete) {
    const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);

    if (toDelete) {
        this.quotes.splice(index, 1);
        this.alertService.alertMe('You have deleted the quote');
    }
  }
  }



}
