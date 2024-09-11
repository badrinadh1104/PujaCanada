import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CartList } from '../models/cart-list';
import { Product } from '../models/product';
import { Puja } from '../models/puja';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  baseurl = "http://localhost:8080"
  userbaseurl = "http://localhost:8080/User"
  producturl= `${this.baseurl}/Product`
  pujaurl=`${this.baseurl}/puja`

// http://localhost:8080/puja/AddnewPuja?name=Ganesh%20Puja%202024&description=Ganesh%20Puja&price=45&discount=10
// http://localhost:8080/Product/AddProductWithImage?name=DhooopSticks&category=Puja&price=10&discount=5&quantity=100&available=true
  public justdemo():Observable<string>{
    return this.http.get(`${this.baseurl}/User/Badrinadh`,{ responseType: 'text' });
  }
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
// UserContoller API's

// To Register User

  public RegisterUser(user:User){
    return this.http.post(`${this.userbaseurl}/RegisterUser`,user)
  }

// To GetAllUsers 

  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.userbaseurl}/GetAllUsers`)
  }

  // To Add Product To UserCartList

  public AddProducttoUserCartList(ProductId:number,userId:number){
    const url = `${this.userbaseurl}/AddProducttoUserCartList`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers if needed
    });
    return this.http.put(`${url}/${ProductId}/${userId}`,null,{headers})
  }


// To Get the CartList of user ;

public getUserCartList(userId:number):Observable<CartList>{
  const url = `${this.userbaseurl}/getUserCartList`
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // Add other headers if needed
  });
  return this.http.get<CartList>(`${url}/${userId}`);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ADD product

// addProductWithImage(name: string, category: string, price: number, discount: number, quantity: number, available: boolean, image: File): Observable<any> {
//   const formData: FormData = new FormData();
//   formData.append('name', name);
//   formData.append('category', category);
//   formData.append('price', price.toString());
//   formData.append('discount', discount.toString());
//   formData.append('quantity', quantity.toString());
//   formData.append('available', available.toString());
//   formData.append('image', image);

//   return this.http.post(`${this.producturl}/AddProductWithImage`, formData);
// }

addProductWithImage(productData: FormData): Observable<string> {
  return this.http.post(`${this.producturl}/AddProductWithImage`, productData,{ responseType: 'text' });
}
getAllProducts ():Observable<Product[]>{
  return this.http.get<Product[]>(`${this.producturl}/GetAllProducts`)
}

getProductById(prodID:number):Observable<Product>{
  // http://localhost:8080/Product/getProductById/1
  return this.http.get<Product>(`${this.producturl}/getProductById/${prodID}`)
}



// ----------------PUJA-------------------

AddPuja(pujaData:FormData):Observable<string>{
  return this.http.post(`${this.pujaurl}/AddnewPuja`,pujaData,{responseType:'text'})
}

// update Puja

UpdatePuja(pujaData:FormData):Observable<string>{
  return this.http.post(`${this.pujaurl}/UpdatePuja`,pujaData,{responseType:'text'})
}


getAllPuja():Observable<Puja[]>{
  return this.http.get<Puja[]>(`${this.pujaurl}/GetAllPujas`)
}

getPujaById(pujaId:number):Observable<Puja>{
  // http://localhost:8080/puja/getPujaByID/1
  return this.http.get<Puja>(`${this.pujaurl}/getPujaByID/${pujaId}`)
}

getUserById(userId:number):Observable<User>{
  return this.http.get<User>(`${this.userbaseurl}/getUserById/${userId}`)
}
}
