import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Quote } from '../shared/quote.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] | undefined = undefined;
  category = 'all';
  title = 'all';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.category = params['id'];
      this.title = this.category;
      this.title = this.title.split('-').join(' ');

      const url = this.category === 'all' ? 'https://skosumbaeva2502-default-rtdb.firebaseio.com/quotes.json' : 'https://skosumbaeva2502-default-rtdb.firebaseio.com/quotes.json?orderBy="category"&equalTo="' + this.category + '"';

      this.http.get<{ [quoteId: string]: Quote }>(url)
        .pipe(map(result => {
          if (result === null) {
            return [];
          }
          return Object.keys(result).map(quoteId => {
            const quote = result[quoteId];
            return new Quote(quoteId, quote.category, quote.author, quote.text);
          })
        }))
        .subscribe(result => {
          this.quotes = result;
        });
    });
  }
}
