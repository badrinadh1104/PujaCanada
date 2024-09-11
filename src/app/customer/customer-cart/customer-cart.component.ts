import { Component, OnInit } from '@angular/core';
import { RestService } from '../../_service/rest.service';
import { CartList } from '../../models/cart-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.css'
})
export class CustomerCartComponent implements OnInit {
  constructor(public rservice:RestService){

  }


  ngOnInit(): void {
    this.getUserCart(1);
  }


  userCart!: CartList;
  public getUserCart(userId:number){
    return this.rservice.getUserCartList(userId).subscribe((d)=>{console.log(d);this.userCart=d},(f)=>console.log(f),()=>console.log(this.userCart));
  }



}
