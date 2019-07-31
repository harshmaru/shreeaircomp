import { Component, OnInit, Input } from "@angular/core";
import { BreadcrumbsService } from "./breadcrumbs.service";
import { RoutesRecognized, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { isNullOrUndefined } from "util";

@Component({
  selector: "breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.css"]
})
export class BreadcrumbsComponent implements OnInit {
  @Input("facebook")
  fbLink;
  @Input("twitter")
  twitLink;
  @Input("linkedin")
  inLink;
  @Input("googleplus")
  gpLink;

  private hierarchy: any[] = [];
  constructor(private breadSvc: BreadcrumbsService,private router:Router,private title:Title) {}
  ngOnInit() {
    this.getBreadcumb();
  }
  getBreadcumb() {
    this.breadSvc.getRouteData().subscribe(data => {
      if (data instanceof RoutesRecognized) {
        this.hierarchy = data.url.split("/")
        if (!isNullOrUndefined(data.state.root.firstChild.data.title))
        {
          this.title.setTitle(data.state.root.firstChild.data.title);
        }
      }
    });
  }
  join(index){
    let res="";
    for(let i = 0;i<=index;i++){
      if(this.hierarchy[i]!=="")
      {
        res=res+"/"+this.hierarchy[i];
      }
    }
    return res
  }
  getURL(){
    return this.router.url;
  }
}
