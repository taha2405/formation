import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Products } from '../../model/model.products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  @Input() products:Products[]=[];
  @Output()elementDeleted= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }
  deleteElement(i:number){
    this.elementDeleted.emit(i);
  }
}
