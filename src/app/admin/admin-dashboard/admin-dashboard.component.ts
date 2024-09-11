import { Component, OnInit } from '@angular/core';
import { RestService } from '../../_service/rest.service';
import { json } from 'stream/consumers';
import { stringify } from 'querystring';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../models/product';
import { Puja } from '../../models/puja';
import { User } from '../../models/user';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgFor,FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
constructor(public rservice:RestService , private fb: FormBuilder){}
successMessage: string | null = null;
  errorMessage: string | null = null;
  inputValue='';
  // productForm: FormGroup;
  productsList: Product[]=[];
  pujasList:Puja[]=[];
  baseurl="http://localhost:8080";
  filteredProducts:Product[]=[];

  // to delete user:
  userId_toDelete!: number;
  pujaId_toDelete!: number;
  productId_toDelete!: number;
  userdetails!: User;
 
  ngOnInit(): void {
   
      this.rservice.getAllProducts().subscribe((d:Product[])=>{this.productsList=d},f=>{alert("oops error"+f.message)},()=>{console.log(this.productsList);this.filteredProducts=[...this.productsList]})
      this.rservice.getAllPuja().subscribe((d:Puja[])=>{this.pujasList=d},f=>{console.log(f)},()=>{console.log(this.pujasList)})
   
  }
  productForm = this.fb.group({
    name :['',Validators.required],
    price :['',Validators.required],
    discount:['',Validators.required],
    category:['',Validators.required],
    image:[null,Validators.required],
    quantity: [null, [Validators.required, Validators.min(0)]],
    available: ['']
  })

  UpdateProductForm = this.fb.group({
    name :['',Validators.required],
    price :['',Validators.required],
    discount:['',Validators.required],
    category:['',Validators.required],
    image:[null,Validators.required],
    quantity: [null, [Validators.required, Validators.min(0)]],
    available: ['']
  })

  pujaForm = this.fb.group({
    id:['',Validators.required],                
    name:['',Validators.required],
    description:['',Validators.required] ,
    price: ['',Validators.required],
    discount:['',Validators.required],
    // image?: Uint8Array;
    image: [null,Validators.required]
  })

  UpdatePujaForm =this.fb.group({
    id:['',Validators.required],                
    name:[''],
    description:[''] ,
    price: [''],
    discount:[''],
    // image?: Uint8Array;
    image: [null]
  })

  updateProduct :Product={
    id: 0,
    name: '',
    price: 0,
    discount: 0,
    category: '',
    image: null,
    quantity: 0,
    isAvailable: false
  };

  // update puja infor
  update_puja: Puja = {
    id:0,
    name: '',
    price: 0,
    discount: 0,
    description: '',
    image: null
  };

  Change_puja: any = {
    id:0,
    name: '',
    price: 0,
    discount: 0,
    description: '',
    image: null
  };

  
  AddProduct(){
    console.log("data"+this.productForm.valid)
    console.log(this.productForm.value)
    const formData = new FormData();
    Object.keys(this.productForm.controls).forEach(key=> {
      formData.append(key, this.productForm.get(key)?.value);
    })
    this.rservice.addProductWithImage(formData).subscribe(response => {
      console.log('Product uploaded successfully!', response);
      this.successMessage="Product uploaded successfully!";
      setTimeout(() => {
        this.successMessage=null
      },3000);
      this.errorMessage=null;
    }, error => {
      console.error('Error uploading product:', error);
      this.errorMessage='Error uploading product: ' + error.message;
      this.successMessage=null;
      setTimeout(() => {
        this.errorMessage=null
      },3000);
    },()=>{this.productForm.reset();});

  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.productForm.patchValue({
      image: file
    });
    console.log(file)
    this.productForm.get('ProductImage')?.updateValueAndValidity();
    
  }
  Oninput(event: Event) {
    const ee = event.target as HTMLInputElement;
    this.inputValue = ee.value;
    console.log(ee.value);
  
    if (ee.value.trim() === '') {
      this.filteredProducts = [...this.productsList];
    } else {
      this.filteredProducts = this.productsList.filter(e => 
        e.name.toLowerCase().includes(ee.value.toLowerCase())
      );
    }
  
    console.log(this.filteredProducts);
  }
  

  
  getImageUrl(productId: number): string {
    
    if (productId !== null  && !isNaN(productId) && productId!=0) {
      return `${this.baseurl}/Product/getImage/${productId}`;
    } else {
      return 'https://images.unsplash.com/photo-1500576992153-0271099def59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlbGxvfGVufDB8fDB8fHww';
    }
  }



  UpdateProduct(){
    console.log("data"+this.UpdateProductForm.valid)
    console.log(this.UpdateProductForm.value)
    const formData = new FormData();
    Object.keys(this.productForm.controls).forEach(key=> {
      formData.append(key, this.productForm.get(key)?.value);
    })
    formData.forEach(e=>{console.log(e)})

  }

  AddPuja(){
    const formData = new FormData();
    Object.keys(this.pujaForm.controls).forEach(key => {formData.append(key,this.pujaForm.get(key)?.value)});
    this.rservice.AddPuja(formData).subscribe(d=>{console.log(d)},f=>{console.log(f)},()=>{this.pujaForm.reset();this.pujaForm.patchValue({image:null})})
    
  }

  OnPujaImageChange(event:any){
    const file = event.target.files[0];
    this.pujaForm.patchValue({image:file});
    console.log(file)
    this.pujaForm.get('image')?.updateValueAndValidity();
    console.log(this.pujaForm.get('image')?.updateValueAndValidity())

  }

updatePuja(){
  const formData = new FormData();
  Object.keys(this.UpdatePujaForm.controls).forEach(key => {
    let value = this.UpdatePujaForm.get(key)?.value;
    if (key === 'price' || key === 'discount') {
      // Set empty or null values to 0
      if (value === null || value === '') {
        value = 0;
      }
    }
    if (key === 'name' || key === 'description') {
      if (value === null || value.trim() === '') {
        value = null; // Set to null if empty or only whitespace
      }
    }
    if (value !== null && (typeof value !== 'string' || value.trim() !== '') && !isNaN(Number(value))) {
      formData.append(key, value);
    }
   });
  console.log(this.UpdatePujaForm.controls)
  console.log(this.UpdatePujaForm.value)
  this.rservice.UpdatePuja(formData).subscribe(d=>{console.log(d)},f=>{console.log(f)},()=>{this.pujaForm.reset();this.pujaForm.patchValue({image:null});this.UpdatePujaForm.reset()})
}

OnPujaImageUpdateChange(event:any){
  const file = event.target.files[0];
  this.UpdatePujaForm.patchValue({image:file});
  console.log(file)
  this.UpdatePujaForm.get('image')?.updateValueAndValidity();
  console.log(this.UpdatePujaForm.get('image')?.updateValueAndValidity())

}

  getpujaImage(pujaId:number):string{
    if (pujaId !== null  && !isNaN(pujaId) && pujaId!=0) {
      return `${this.baseurl}/puja/getImage/${pujaId}`;
    } else {
      return 'https://images.unsplash.com/photo-1500576992153-0271099def59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlbGxvfGVufDB8fDB8fHww';
    }
    
  }


  OnInputPujaID(event:Event){
    const pujaId= event.target as HTMLInputElement; 
    console.log(pujaId.value)
    if(pujaId.value.trim() === ''){
      console.log("Empty Id");
      this.update_puja = this.Change_puja;

    }else{
      this.rservice.getPujaById(parseInt(pujaId.value)).subscribe(d=>{
        this.update_puja=d;
        console.log(d)
      },f=>{
        console.log(f.error);
      },()=>{console.log("Success");})
     
    }   

  }

  OnInputProductID(event:Event){
    const prodID= event.target as HTMLInputElement; 
    console.log(prodID.value)
    if(prodID.value.trim() === ''){
      console.log("Empty Id");
      // this.update_puja = this.Change_puja;

    }else{
      this.rservice.getProductById(parseInt(prodID.value)).subscribe(d=>{
        this.updateProduct=d;
        console.log(d)
      },f=>{
        console.log(f.error);
      },()=>{console.log("Success");})
     
    }

}

OnInputUserID(event:Event){
  const userId = event.target as HTMLInputElement;
  console.log(userId.value);
  if(userId.value.trim() === ''){
    console.log("Empty Id");
    // this.update_puja = this.Change_puja;

  }else{
    this.rservice.getUserById(parseInt(userId.value)).subscribe(d=>{
      this.userdetails=d;
      console.log(d)
    },f=>{
      console.log(f.error);
    },()=>{console.log("Success");})
   
  }
}


// to delete user

deletUser(){
  console.log(this.userId_toDelete)
}

}

