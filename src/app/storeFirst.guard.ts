import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot,Router} from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class StoreFirstGuard
{
	private firstTimeNavigation=true; //To store whether this is the first time the canActivate method is called  

	constructor(private router:Router)
	{

	}

	canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) :boolean
	{
		//This method will check whether the user is navigating for the first time and if he is accessing a non-home page
		if(this.firstTimeNavigation)
		{
			//First time open
			this.firstTimeNavigation=false; //Setting this to false
			if(route.component!=StoreComponent)
			{
				//If the current component is not our home component i.e StoreComponent, we will redirect him to root 
				this.router.navigateByUrl("/");
				return false;
			}

			return true;
			
		}
		else
		{	
			//If not first time, user can navigate to any page 
			return true; 
		}
	}
}