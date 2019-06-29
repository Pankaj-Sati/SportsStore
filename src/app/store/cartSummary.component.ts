import {Component} from '@angular/core';
import {Cart} from '../model/cart.model';

/*
	This component will display the summary of the cart i.e total items and price
*/

@Component({

	selector:'cartSummary',
	templateUrl:'cartSummary.component.html'
})

export class CartSummaryComponent
{

	constructor(public cart:Cart)
	{

	}
}