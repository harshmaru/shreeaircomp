import { Component, OnInit } from '@angular/core';
import { MainProductService } from '../main-products/main-products.service';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'sac-products-services',
  templateUrl: './products-services.component.html',
  styleUrls: ['./products-services.component.css']
})
export class ProductsServicesComponent implements OnInit {

  categories=[];

  constructor(private dynProdSvc:MainProductService,private commonSvc:CommonService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.dynProdSvc.getDynamicCategories().subscribe((data) => {
      this.categories = data
    })
  }

}
