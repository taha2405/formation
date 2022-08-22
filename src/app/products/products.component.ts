import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Products } from './model/model.products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Products[]=[];
 addProductForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      nameProduct: new FormControl('', [Validators.required]),
      qtyProduct: new FormControl('', [Validators.required]),
      refProduct: new FormControl('', [Validators.required]),

      
    });
  }
  addProduct(){
  this.products.push(this.addProductForm.value);
  console.log(this.products);
  }
 
  deleteProduct(i:number){
   
   this.products.splice(i,1);
   console.log(this.products);
  }

}
