import { Component, OnInit } from '@angular/core';
import { MainProductService } from './main-products.service';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'sac-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.css']
})
export class MainProductsComponent implements OnInit {

  categories:any[];

  constructor(private dynProdSvc:MainProductService,private commonSvc:CommonService) { }

  ngOnInit() {
    this.getCategories()
  }

  getCategories(){
    this.dynProdSvc.getDynamicCategories().subscribe((data)=>{
      this.categories=data
    })
  }

}
