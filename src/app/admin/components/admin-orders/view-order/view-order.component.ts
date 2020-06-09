import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import 'rxjs/add/operator/take';
import { Order } from 'shared/models/order';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit{
  order: any;

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
