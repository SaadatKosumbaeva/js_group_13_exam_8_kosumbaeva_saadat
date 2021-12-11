import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../../shared/quote.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() quoteDelete = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  deleteQuote() {
    this.quoteDelete.emit();
  }

  editQuote() {
    void this.router.navigate(['quotes/' + this.quote.id + '/edit']);
  }
}
