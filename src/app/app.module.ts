import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from './store/store.module';
import {StoreComponent} from './store/store.component';
import {CheckoutComponent} from './store/checkout.component';
import {CartDetailComponent} from './store/cartDetail.component';
import {RouterModule} from "@angular/router";
import {StoreFirstGuard} from './storeFirst.guard';
import {AdminComponent} from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StoreModule,
    RouterModule.forRoot([
    			{path:"store", component: StoreComponent,canActivate: [StoreFirstGuard]}, //Guarding the first time navigation by calling canActivate method of StoreFirstGuard
    			{path:"cart",component:CartDetailComponent,canActivate: [StoreFirstGuard]},
    			{path:"checkout",component:CheckoutComponent,canActivate: [StoreFirstGuard]},
          {   path: "admin",
              loadChildren: "./admin/admin.module#AdminModule",
              canActivate: [StoreFirstGuard]
          },
    			{path:"**",redirectTo: "/store"}
    	])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
