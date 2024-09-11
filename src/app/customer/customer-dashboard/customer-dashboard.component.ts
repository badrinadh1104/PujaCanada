import { Component } from '@angular/core';
import { AppointmentDTO } from '../../models/appointment-dto';
import { FormsModule } from '@angular/forms';
import { RestService } from '../../_service/rest.service';
import { Puja } from '../../models/puja';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { Router } from 'express';
import { Route, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {

  pujas: Puja[] = [];
  paginatedPujas: Puja[] = [];
  currentPage = 0;
  itemsPerPage = 9;


  products:Product[]=[];
  paginatedproducts:Product[]=[];
  currentProductPage=0;
  ProductsperPage=9;


  baseurl="http://localhost:8080";

  constructor(private service: RestService) {}

  ngOnInit(): void {
    this.loadPujas();
    this.loadProducts();
  }

  loadPujas(): void {
    this.service.getAllPuja().subscribe(data => {
      this.pujas = data;
      this.updatePaginatedPujas();
    });
  }


  updatePaginatedPujas(): void {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedPujas = this.pujas.slice(start, end);
    console.log(this.paginatedPujas)
  }

  nextPage(): void {
    if ((this.currentPage + 1) * this.itemsPerPage < this.pujas.length) {
      this.currentPage++;
      this.updatePaginatedPujas();
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePaginatedPujas();
    }
  }




  getPujaImageUrl(productId: number): string {
    return `${this.baseurl}/puja/getImage/${productId}`;
  }

  getProductImageUrl(productId: number): string {
    return `${this.baseurl}/Product/getImage/${productId}`;
  }
  
  loadProducts():void{
    this.service.getAllProducts().subscribe(d=>{
      this.products=d;
      this.updatePaginatedProducts();
    })
  }

  updatePaginatedProducts(){
    const start = this.currentProductPage*this.ProductsperPage;
    const end = start+this.ProductsperPage;
    this.paginatedproducts = this.products.slice(start,end);
    console.log(this.paginatedproducts);
  }

  nextProductsPage(){
    if((this.currentProductPage+1)*this.ProductsperPage< this.products.length){
      this.currentProductPage++;
      this.updatePaginatedProducts()
    }
  }
  
  previousProductsPage(){
    if(this.currentProductPage>0){
      this.currentProductPage--;
      this.updatePaginatedProducts();
    }
  }

  scrollToSection() {
    const element = document.getElementById('Puja_Products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  createAppointment(){
    
  }

}
