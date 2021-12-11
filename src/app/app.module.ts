import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteItemComponent } from './quotes/quote-item/quote-item.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteItemComponent,
    ToolbarComponent,
    NewQuoteComponent,
    HomeComponent,
    SidebarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
