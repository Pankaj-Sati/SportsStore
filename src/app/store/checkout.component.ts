import { Component } from "@angular/core";
import {Order} from '../model/order.model';
import { OrderRepository } from '../model/order.repository';
import { NgForm } from '@angular/forms';

@Component({
	selector:'checkout',
	templateUrl: 'checkout.component.html',
	styleUrls:['checkout.component.css']
})
export class CheckoutComponent 
{ 

    submitted: boolean = false;
    orderSent: boolean = false;
  
	constructor(public order:Order,public orderRepository:OrderRepository)
	{

    }

    submitOrder(form: NgForm)
    {
        this.submitted = true;
        if (form.valid)
        {
            //If the form is valid, we will save our order

            this.orderRepository.saveOrder(this.order).subscribe(() => {

                this.orderSent = true;
                this.order.clearCart();
                this.submitted = false;
            });
        }
       
    }
}