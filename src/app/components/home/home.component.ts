import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Observable } from 'rxjs';
import { FoodItem } from 'src/app/model/food-item';
import { OrderService } from 'src/app/services/order.service';
import { OrderItem } from 'src/app/model/order-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //foodItems: Observable<FoodItem[]>;
  orderItem:OrderItem
  constructor(private restaurantSvc: RestaurantService, private orderSvc: OrderService) {    
    //this.foodItems=this.restaurantSvc.getFoodItems();
   }

  ngOnInit() {
  }
  public foodItems: FoodItem[]=[
    {name:"Dhosa", price:"45", description:"Delicious",isPureVeg:true, category:"Breakfast"},
    {name:"thali", price:"80", description:"Delicious",isPureVeg:true, category:"Lunch"},
    {name:"dal bati", price:"70", description:"Delicious",isPureVeg:true, category:"Dinner"},
    {name:"poha", price:"40", description:"Delicious",isPureVeg:true, category:"snacks"}
];

placeOrder(food :FoodItem)
  {
      this.orderItem ={
        name: food.name,
        user:"",
        price:food.price,
        restaurant:"",
        type: food.category

      }
    this.orderSvc.addOrder(this.orderItem).subscribe(res=>{
      alert("Order placed successfully")
    }),
    err=>{
      console.log(err);
      alert("Error in placing order")
    }
  }

}
