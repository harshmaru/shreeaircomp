import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'sac-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  categories:any[]=[];

  constructor(private commonSvc:CommonService) { }

  ngOnInit() {
    this.commonSvc.getCategories().subscribe((data) => {
      this.categories = data;
    })
  }
  urlForProducts(category) {
    return "products/" + this.commonSvc.replaceAllWith(category, " ", "-");
  }

}
