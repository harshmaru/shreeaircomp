import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ProductSwitcherService } from "./product-switcher.service";
import { CommonService } from "src/app/common.service";
import { Title } from "@angular/platform-browser";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "sac-product-switcher",
  templateUrl: "./product-switcher.component.html",
  styleUrls: ["./product-switcher.component.css"]
})
export class ProductSwitcherComponent implements OnInit, OnDestroy {
  products = [];
  selectedCategory = "";
  selectedProduct = "";
  isFirstProduct = true;
  routeEvents;
  product:any = {};

  constructor(
    private prodSwitchSvc: ProductSwitcherService,
    private commonSvc: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private title:Title,
    private titlecasePipe: TitleCasePipe
  ) {}

  ngOnInit() {
    this.routeEvents = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.selectedCategory = this.route.snapshot.params.category;
        this.loadProductsBasedOnCategory(this.selectedCategory);
        if (this.route.snapshot.params.product) {
          this.title.setTitle(this.titlecasePipe.transform(this.commonSvc.replaceAllWith(this.route.snapshot.params.product, "-", " ")));
          this.loadProduct(this.route.snapshot.params.product);
        }
        else if(!this.route.snapshot.params.product && this.route.snapshot.params.category){
          this.loadCategory(this.route.snapshot.params.category);
        }
      }
    });
    this.selectedCategory = this.route.snapshot.params.category;
    this.loadProductsBasedOnCategory(this.selectedCategory);
    if (this.route.snapshot.params.product) {
      this.loadProduct(this.route.snapshot.params.product);
    }
    else if (!this.route.snapshot.params.product && this.route.snapshot.params.category) {
      this.loadCategory(this.route.snapshot.params.category);
    }
  }
  loadProductsBasedOnCategory(category) {
    this.prodSwitchSvc
      .getProductsList(this.commonSvc.replaceAllWith(category, "-", " "))
      .subscribe(products => {
        this.products = products;
      });
  }
  loadProduct(product) {
    this.title.setTitle(this.titlecasePipe.transform(this.commonSvc.replaceAllWith(product, "-", " ")));
    this.prodSwitchSvc.getProduct(product).subscribe(data => {
      if (data === null) {
        this.product = {
          ID: "invalid",
          link: this.commonSvc.replaceAllWith(product, "-", " "),
          title: "Cant Find Product",
          description: "Data Not Available for this product",
          image: "/assets/img/placeholder.jpg",
          extra: null
        };
      } else {
        this.product = data;
      }
    });
  }
  loadCategory(category) {
    this.prodSwitchSvc.getCategory(category).subscribe(data => {
      if (data === null) {
        this.product = {
          ID: "invalid",
          link: this.commonSvc.replaceAllWith(category, "-", " "),
          title: "Cant Find Product",
          description: "Data Not Available for this product",
          image: "/assets/img/placeholder.jpg",
          extra: null
        };
      } else {
        this.product = data;
      }
    });
  }
  navigateToProduct(product) {
    let url = "";
    let hie = this.commonSvc.getHierarchy();
    if (this.route.snapshot.params.product) {
      hie.pop();
    }
    hie.push(this.commonSvc.replaceAllWith(product, " ", "-"));
    url = hie.join("/");
    this.router.navigateByUrl(this.commonSvc.getEncodedURI(url));
  }
  ngOnDestroy() {
    if (this.routeEvents) this.routeEvents.unsubscribe();
  }
}
