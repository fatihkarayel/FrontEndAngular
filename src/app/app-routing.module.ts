import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: "", pathMatch:"full", component:ProductComponent}, //ana sayfadaki rooter adresi
  {path: "product", component:ProductComponent} //anasayfanın alt sayfası olan /product çağrılırsa rooter adresi
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
