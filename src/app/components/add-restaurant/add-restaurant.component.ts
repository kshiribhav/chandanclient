import { Component, OnInit } from '@angular/core';
import { RestaurantItem } from 'src/app/model/restaurant-item';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurant: RestaurantItem;
  
  constructor(private restaurantSvc: RestaurantService) {
    this.restaurant = {
        name: "",
        location: "",
        address:"",
        description: "",
        isPureVeg:true,
        //ratings: 0,        
    }
  }

  ngOnInit() {
  }

  saveRestaurant(frm, img){
    if (frm.valid) {           
      let formData: FormData = new FormData();

      formData.append("name", this.restaurant.name);
      formData.append("location", this.restaurant.location);
      formData.append("address", this.restaurant.address);
      formData.append("description", this.restaurant.description);
      formData.append("pureVeg", this.restaurant.isPureVeg.toString());
      //formData.append("manufacturingDate", this.restaurant.ratings.toString());
      formData.append("image", img.files[0], img.files[0].name);

      //save to server using Web API  
      this.restaurantSvc.addRestaurant(formData)
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
