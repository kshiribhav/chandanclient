import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/model/food-item';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'addfooditem',
  templateUrl: './addfooditem.component.html',
  styleUrls: ['./addfooditem.component.css']
})
export class AddfooditemComponent implements OnInit {
foodItem:FoodItem;
foodCategories:any[]=[
  {id:1,name:"Breakfast"},
  {id:2,name:"Lunch"},
  {id:3,name:"Snacks"},
  {id:4,name:"Dinner"},
  {id:5,name:"Desserts"}
];

  constructor(private restaurantSvc:RestaurantService) { 
    this.foodItem = {
      name: "",
      description: "",
      isPureVeg:true,
      price:"",
      category:""
      };
  }

  ngOnInit() {
  }

  saveFoodItem(frm, img){
    if (frm.valid) {           
      let formData: FormData = new FormData();

      formData.append("name", this.foodItem.name);
      formData.append("description", this.foodItem.description);
      formData.append("isPureVeg", this.foodItem.isPureVeg.toString());
      formData.append("image", img.files[0], img.files[0].name);

      //save to server using Web API  
      this.restaurantSvc.addFoodItem(formData)
      .subscribe(
          result => {
              alert("Added successfully");
          },
          err => {
              console.log(err);
              alert("Error in adding product")
          }
      );
    }
    else {
      alert("Invalid form data");
    }
  }
}
