import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: "", pathMatch:"full", component:ProductComponent}, //ana sayfadaki rooter adresi
  {path: "products", component:ProductComponent},
  {path: "products/category/:categoryId", component:ProductComponent} // iki nokta demek değişken olarak 1 -2 -3 gibi değerler gelecek
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
