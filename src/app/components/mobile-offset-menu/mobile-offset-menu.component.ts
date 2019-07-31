import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'sac-mobile-offset-menu',
  templateUrl: './mobile-offset-menu.component.html',
  styleUrls: ['./mobile-offset-menu.component.css']
})
export class MobileOffsetMenuComponent implements OnInit {
  
  categories: any[] = [];

  constructor(private commonSvc: CommonService) { }

  ngOnInit() {
    this.commonSvc.getCategories().subscribe((data) => {
      this.categories = data;
    })
  }

  urlForProducts(category) {
    return "products/" + this.commonSvc.replaceAllWith(category, " ", "-");
  }
}
