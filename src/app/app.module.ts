import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.components';
import {ConvertSpacesPipe} from './shared/convert-spaces.pipe';
import {StartComponent} from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertSpacesPipe,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ProductListComponent],
})
export class AppModule { }
