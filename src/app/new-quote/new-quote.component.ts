import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  category = 'star-wars';
  author = '';
  text = '';
  quoteId = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.quoteId = params['id'];
    })
    if (this.quoteId) {
      this.http.get<{ [parameter: string]: string }>('https://skosumbaeva2502-default-rtdb.firebaseio.com/quotes/' + this.quoteId + '.json')
        .subscribe(result => {
          this.category = result['category'];
          this.author = result['author'];
          this.text = result['text'];
        });
    }
  }

  addQuote() {
    if (this.category.trim().length && this.author.trim().length && this.text.trim().length) {
      const quoteData = {category: this.category, author: this.author, text: this.text};

      if (!this.quoteId) {
        this.http.post('https://skosumbaeva2502-default-rtdb.firebaseio.com/quotes.json', quoteData).subscribe();
      } else {
        this.http.put('https://skosumbaeva2502-default-rtdb.firebaseio.com/quotes/' + this.quoteId + '.json', quoteData).subscribe();
      }

      this.category = 'star-wars';
      this.author = '';
      this.text = '';
    }
  }

}
