import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantItem } from '../model/restaurant-item';
import { Observable } from 'rxjs';
import { FoodItem } from '../model/food-item';
import { CustomerReview } from '../model/customerReview';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  

  readonly API_URL:string="https://localhost:44368/api/restaurants";
  constructor(private http: HttpClient) { }

  addRestaurant(formData:FormData):Observable<RestaurantItem>{
    return this.http.post<RestaurantItem>(`${this.API_URL}/addRestaurant`, formData);
  }

  getFoodItems():Observable<FoodItem[]>{
    return this.http.get<FoodItem[]>(`${this.API_URL}`);
  }

  addFoodItem(formData: FormData):Observable<FoodItem> {
    return this.http.post<FoodItem>(`${this.API_URL}/addFoodItem`, formData);
  }

  addCustomerReview(formData: FormData):Observable<CustomerReview> {
    return this.http.post<CustomerReview>(`${this.API_URL}/addReview`, formData);
  }
}
