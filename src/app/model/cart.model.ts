import {Injectable} from "@angular/core";
import {Product} from './product.model';

/*
	Objective- This class will hold the items that a user will put into the cart
	It will allow user to add, remove and get total items and their price
*/
@Injectable()
export class Cart
{
	public cartItems:CartItem[]=[]; //To store the cart items in an array
	public itemCount:number=0; //Total items in the cart
	public cartPrice:number=0; //Total price of all items in the cart

	addProduct(product:Product, quantity:number=1)
	{
		//Before we add any product, we will check whether it is already in out cart or not
		//If it will be already in our cart, we will increase its quantity else we will add a new CartItem
		let item=this.cartItems.find(cartItem=> cartItem.product.id==product.id); //Finding item in the array

		if(item!=undefined) //If there is already a product with same id in the array
		{
			//every variable when not assigned value is default to undefined
			item.quantity+=quantity; //Increase the quantity (item here is pass by reference)
		}
		else
		{
			this.cartItems.push(new CartItem(product,quantity)); //Add a new cart item in the array
		}

		this.recalculate();

	}

	recalculate()
	{
		this.itemCount=0;
		this.cartPrice=0;
		this.cartItems.forEach(item=>{
			//For each cartItem in the array, find its quantity and price
			this.itemCount+=item.quantity;
			this.cartPrice+=(item.quantity*item.product.price);
		});
	}

	clearCart()
	{
		//Remove all items in the cart
		this.cartItems=[]; //reinitialize the array
		this.cartPrice=0;
		this.itemCount=0;
	}

	removeItem(id:number)
	{
		//To remove a product from the cart
		let itemIndex=this.cartItems.findIndex(cartItem=> cartItem.product.id==id);

		if(itemIndex!=undefined)
		{
			//Item found successfully
			this.cartItems.splice(itemIndex,1); //splice is used to remove elements from array. Syntax: splice(start_index, no_of_item_to_remove)
		}
		this.recalculate();
	}

	updateQuantity(product:Product, quantity:number)
	{

		//To update a product quantity in the cart
		let item=this.cartItems.find(cartItem=>cartItem.product.id==product.id);

		if(item!=undefined)
		{
			item.quantity=<number>quantity;	
		}
		
		this.recalculate();
	}

}

export class CartItem
{
	constructor(public product:Product,public quantity:number)
	{

	}

	get itemTotal()
	{
		//To get the total price of this cart item i.e this product
		return this.product.price * this.quantity;
	}
}