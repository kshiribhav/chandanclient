import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../model/order-item'
import { Observable } from 'rxjs';
import { FoodItem } from '../model/food-item';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly API_URL: string = "http://localhost:61493/api/Order";

  constructor(private http: HttpClient) { }

  addOrder(orderFood: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(`${this.API_URL}`, orderFood);
  }
  getOrdersList(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(`${this.API_URL}`);
  }
  cancelOrder(id: string){
    return this.http.delete(`${this.API_URL}/${id}`)
  }
}
