import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookViewComponent } from './book-view/book-view.component';

@NgModule({
  declarations: [BookViewComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
