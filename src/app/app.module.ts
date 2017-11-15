import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.components';
import {ConvertSpacesPipe} from './shared/convert-spaces.pipe';
import {StartComponent} from './shared/star.component';
import {ProductService} from './products/product.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertSpacesPipe,
    StartComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],
  providers: [ProductService, ProductGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
