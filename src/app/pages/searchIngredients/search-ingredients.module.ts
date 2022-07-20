import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

import { SearchRoutingModule } from './search-ingredients-routing.module';
import { SearchIngredientsComponent } from './search-ingredients.component';



@NgModule({
  declarations: [
    SearchIngredientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchRoutingModule,
    SharedComponentsModule,

  ]
})
export class SearchIngredientsModule { }
