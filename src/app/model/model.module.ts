import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import {Cart} from "./cart.model";
import {Order} from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from "./rest.datasource";

@NgModule({
    imports:[HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource }] //Here we are asking angular to use RestDataSouce object whenever there is a dependency injection of StaticDataSource
    //Since all the methods are same in both the classes, we will not get a run time error
})
export class ModelModule { }