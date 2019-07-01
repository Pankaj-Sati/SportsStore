/*
	This class will prevent any user from directly accessing Admin features without logging in
*/

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {AuthService} from '../model/auth.service';


@Injectable()
export class AuthGuard
{
	constructor(private router:Router,private authService:AuthService)
	{

	}

	canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
	{
		if(!this.authService.authenticated)
		{
			//If the current user is not authenticated, we will redirect him to authentication page
			this.router.navigateByUrl("/admin/auth");
			return false; //Returning false indicates our Admin Module to not allow any user to enter specified page without login
		}
		else
		{
			return true; //User can access the admin features because he is logged in
		}
	}
}