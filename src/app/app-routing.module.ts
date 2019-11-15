import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, AddfooditemComponent, AddRestaurantComponent, AddreviewComponent, OrdersComponent } from './components';


const routes: Routes = [
  { path:"home", component:HomeComponent},
  { path:"addRestaurant", component:AddRestaurantComponent},
  { path:"addItem", component:AddfooditemComponent},
  { path:"addCustomerReview", component:AddreviewComponent},
  {path:"orders",component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
