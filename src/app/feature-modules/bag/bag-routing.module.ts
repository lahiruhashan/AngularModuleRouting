import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagViewComponent } from './bag-view/bag-view.component';

const routes: Routes = [
  {
    path: '',
    component: BagViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BagRoutingModule { }
