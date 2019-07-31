import { Injectable } from "@angular/core";
import { HttpClient, HttpUrlEncodingCodec } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommonService } from "src/app/common.service";
import { Config } from "src/app/config";

@Injectable({
  providedIn: "root"
})
export class ProductSwitcherService {
  constructor(private http: HttpClient,private commonSvc:CommonService,private config:Config) {}

  getProductsList(category):Observable<any>{
    return this.http.get(`${this.config.GET_PRODUCTS_LIST_URL}?category=${this.commonSvc.getEncodedURI(category)}`)
  }
  getProduct(product):Observable<any>{
    return this.http.get(this.config.GET_PRODUCT_WITH_ID + "?product=" + this.commonSvc.getEncodedURI(this.commonSvc.replaceAllWith(product,"-"," ")))
  }
  getCategory(category): Observable<any> {
    return this.http.get(this.config.GET_CATEGORY_WITH_ID + "?category=" + this.commonSvc.getEncodedURI(this.commonSvc.replaceAllWith(category, "-", " ")))
  }
}
