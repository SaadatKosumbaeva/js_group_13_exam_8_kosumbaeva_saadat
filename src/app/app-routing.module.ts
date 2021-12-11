import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { NotFoundComponent } from './not-found.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    path: 'quotes', component: HomeComponent, children: [
      {path: ':id', component: QuotesComponent},
    ]
  },
  {path: 'add-quote', component: NewQuoteComponent},
  {path: 'quotes/:id/edit', component: NewQuoteComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
