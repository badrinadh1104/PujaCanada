import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { SignUpComponent } from './customer/sign-up/sign-up.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PriestDashboardComponent } from './customer/priest-dashboard/priest-dashboard.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    // {path:"customer/login",component:SignUpComponent},
    // {path:"customer/dashboard",component:CustomerDashboardComponent},
    // {path:"customer/cart",component:CustomerCartComponent},
    { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
    {path:"Priest/PriestDash",component:PriestDashboardComponent},
    // {path:"admin/AdminDash",component:AdminDashboardComponent},
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    {path:"**",component:PageNotFoundComponent},
];
