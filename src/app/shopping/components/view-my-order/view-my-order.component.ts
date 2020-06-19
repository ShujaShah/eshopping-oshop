import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import 'rxjs/add/operator/take';
import { Order } from 'shared/models/order';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-my-order.component.html',
  styleUrls: ['./view-my-order.component.css']
})
export class ViewMyOrderComponent implements OnInit{
  order: any;
  items: Order;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService) {

    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.orderService.getOrder(id).take(1).subscribe(data=>
      {this.order=data;console.log(data);
      });
  }
  get totalPrice(){
    let sum = 0;
    for (let items in this.order.items)
    sum += this.order.items[items].totalPrice;
    return sum;
  }


ngOnInit(){
  
}

}
