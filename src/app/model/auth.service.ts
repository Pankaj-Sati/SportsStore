//This class will be used for authenticating a user

//The actual authtication mechanism is in RestDataSource file. 
//This class acts as an abstraction to the actual authentication logic

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RestDataSource} from "./rest.datasource";

@Injectable()
export class AuthService
{
	constructor(public dataSource:RestDataSource)
	{

	}

	authenticate(user:string,pass:string): Observable<boolean>
	{
		return this.dataSource.authticate(user,pass);
	}

    get authenticated():boolean
	{
		return this.dataSource.authToken!=null; //If the token is null then the user is not authenticated right now
	}

	clear()
	{
		//To remove the logged in user

		this.dataSource.authToken=null;
	}
} 