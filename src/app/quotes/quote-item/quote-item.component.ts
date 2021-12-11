import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../../shared/quote.model';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() quoteDelete = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteQuote() {
    this.quoteDelete.emit(this.quote.id);
  }
}
