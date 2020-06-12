import 'rxjs/add/operator/take';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit{
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


ngOnInit(){
  
}

}
