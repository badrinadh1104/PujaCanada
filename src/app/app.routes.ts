import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { SignUpComponent } from './customer/sign-up/sign-up.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"customer/login",component:SignUpComponent},
    {path:"customer/dashboard",component:CustomerDashboardComponent},
    {path:"**",component:PageNotFoundComponent},
];
