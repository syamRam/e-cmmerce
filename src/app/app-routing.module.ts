import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { authGuard } from './auth.guard';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { OrdersComponent } from './orders/orders.component';
import {CheckOutComponent} from "./check-out/check-out.component";
import {WishListComponent} from "./wish-list/wish-list.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", canActivate: [authGuard], component: HomeComponent },
  { path: "about", canActivate: [authGuard], component: AboutComponent },
  { path: "categories", canActivate: [authGuard], component: CategoriesComponent },
  { path: "product", canActivate: [authGuard], component: ProductComponent },
  { path: "cart", canActivate: [authGuard], component: CartComponent },
  { path: "brands", canActivate: [authGuard], component: BrandsComponent },
  { path: "productDetials/:id", canActivate: [authGuard], component: ProductDetialsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {   path:'check-out/:cartId' , component:CheckOutComponent},
  { path: "allorders", component: OrdersComponent },
  { path: "whitlist", component: WishListComponent },
  { path: 'setting', loadChildren: () => import("./settings/settings.module").then((m) => m.SettingsModule) },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
