import {Injectable} from '@angular/core';
import {Order} from './order.model';
import {StaticDataSource} from './static.datasource';
import {Observable} from 'rxjs';

@Injectable()
export class OrderRepository
{
	public orders:Order[]=[];

	constructor(public datasource:StaticDataSource)
	{

	}

	getOrders():Order[]
	{
		return this.orders;
	}

	saveOrder(order:Order): Observable<Order>
	{
		return this.datasource.saveOrder(order);
	}
}