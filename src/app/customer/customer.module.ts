import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes:Routes=[
  { path: 'dashboard', component: CustomerDashboardComponent },
  { path: 'cart', component: CustomerCartComponent },
  { path: 'login', component: SignUpComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
