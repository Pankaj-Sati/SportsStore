import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import {AuthGuard} from './auth.guard';

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent},
    {
        path: "main", component: AdminComponent, canActivate:[AuthGuard] //A non logged-in user will not be able to access this page
        
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
   
    declarations: [AuthComponent, AdminComponent],

    providers:[AuthGuard]
})
export class AdminModule { }
