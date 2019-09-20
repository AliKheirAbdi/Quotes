import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {

downvote=0;
upvote =0

voteDown(){
  this.downvote = this.downvote+1;
}

voteUp(){
  this.upvote = this.upvote+1;
}


  constructor() { }

  ngOnInit() {
  }

}
