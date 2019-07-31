import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'sac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories:any[]=[];

  constructor(private commonSvc:CommonService) { }

  ngOnInit() {
    this.commonSvc.getCategories().subscribe((data)=>{
      this.categories = data;
    })
  }

  urlForProducts(category){
    return "products/"+this.commonSvc.replaceAllWith(category," ","-");
  }


}
