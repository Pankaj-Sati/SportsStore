import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import {map} from 'rxjs/operators';

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource
{
    baseUrl: string;
    authToken:string; //This variable will hold the authentication token received from the server if login is successful 

    constructor(private http: HttpClient) 
    {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> 
    {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order: Order): Observable<Order> 
    {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }

    authticate(username:string,password:string) : Observable<boolean>
    {
        let data={
            name:username,
            password:password
        };
        return this.http.post<any>(this.baseUrl+"login",data).pipe(map(response=>
        {
              this.authToken=response.success?response.token:null;
              return response.success;
        }));
    }


}