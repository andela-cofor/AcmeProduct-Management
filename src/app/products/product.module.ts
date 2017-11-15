import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.components';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertSpacesPipe } from '../shared/convert-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailsComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertSpacesPipe,
  ],
  providers: [ProductService, ProductGuardService],
})
export class ProductModule { }
