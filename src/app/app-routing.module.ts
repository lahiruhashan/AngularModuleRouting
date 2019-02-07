import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'book',
    loadChildren: './feature-modules/book/book.module#BookModule'
  },
  {
    path: 'bag',
    loadChildren: './feature-modules/bag/bag.module#BagModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
