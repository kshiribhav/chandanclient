import { Component, OnInit } from '@angular/core';
import { CustomerReview } from 'src/app/model/customerReview';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  customerReview:CustomerReview;

  constructor(private restaurantSvc:RestaurantService) { 
    this.customerReview = {
      username: "",
      comments: "",
      restaurantId:"",
      rating:0
      };
  }

  ngOnInit() {
  }

  saveReviewComment(frm, img){
    if (frm.valid) {           
      let formData: FormData = new FormData();

      formData.append("username", this.customerReview.username);
      formData.append("comments", this.customerReview.comments);
      formData.append("restaurantId", this.customerReview.restaurantId);
      formData.append("rating", this.customerReview.rating.toString());

      //save to server using Web API  
      this.restaurantSvc.addCustomerReview(formData)
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
