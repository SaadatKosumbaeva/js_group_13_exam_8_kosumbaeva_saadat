import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  category = 'star-wars';
  author = '';
  text = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  addQuote() {
    if (this.category.trim().length && this.author.trim().length && this.text.trim().length) {
      const quoteData = {category: this.category, author: this.author, text: this.text};

      this.http.post('https://skosumbaeva2502-default-rtdb.firebaseio.com/quotes.json', quoteData).subscribe();
      this.category = 'star-wars';
      this.author = '';
      this.text = '';
    }
  }

}
