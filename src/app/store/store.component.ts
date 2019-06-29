import {Component} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';
import {Cart} from '../model/cart.model';
import {Router} from '@angular/router';

@Component({

	selector:'store',
	templateUrl:'store.component.html'
})

export class StoreComponent 
{

	selectedCategory:string=null;
	productsPerPage:number=5;
	currentPage:number=1;

	constructor(private router:Router,private repository: ProductRepository,private cart:Cart) 
	{ 
	}

	get products(): Product[] 
	{
		let productDisplayed=(this.currentPage-1)*this.productsPerPage; //If we are on page 2, then product displyed will be (2-1)*5=5 i.e 5 products are already displayed

		return this.repository.getProducts(this.selectedCategory)
		.slice(productDisplayed,productDisplayed+this.productsPerPage); //Slice the array by returning elements from current product displayed to products per page i.e 5-10
	}

	get categories(): string[] 
	{
		return this.repository.getCategories();
	}

	changeCategory(newCategory?:string)
	{
		this.selectedCategory=newCategory; 
		this.currentPage=1; //reset the page
	}

	changePage(newPage)
	{
		this.currentPage=<number> newPage;
	}

	get pageNumbers(): number[]
	{
		let productArr=this.repository.getProducts(this.selectedCategory);
		let totalPages= Math.ceil(productArr.length/this.productsPerPage); //25/5 =5 pages in total

		return Array(totalPages).fill(0).map((x,i)=> i+1);
	}

	changePageSize(newSize)
	{
		this.productsPerPage=<number> newSize;
		this.changePage(1);
	}

	addProductToCart(product)
	{
		this.cart.addProduct(product); //Quantity is default to 1 in addProduct()
		this.router.navigateByUrl("/cart"); //navigateByUrl() allows Angular to load a new url upon the abse URL.
		//Since we have routing enabled and we have mapped /cart to CartDetailComponent, the browser will redirect us to CartDetailComponent
	}
}