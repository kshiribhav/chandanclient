import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/app/model/order-item';
import{OrderService} from 'src/app/services/order.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderItems: Observable<OrderItem[]>;
  
  constructor(private orderSvc: OrderService) { 
    this.orderItems=orderSvc.getOrdersList();
  }
  ngOnInit() {
  }
  removeOrder(id:string)
  {
    console.log(id);
    this.orderSvc.cancelOrder(id).subscribe(res=>
      {alert("Order successfully cancelled")}),
      err=>{alert("error in cancelling")}
  }
}
