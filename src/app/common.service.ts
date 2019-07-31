import { Injectable } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Config } from './config';

@Injectable({
  providedIn: "root"
})
export class CommonService {

  constructor(private router:Router,private http:HttpClient,private config:Config,private httpVal:HttpUrlEncodingCodec) {}

  joinSameLevelProducts(prod){
    let hierarchy = this.getHierarchy()
    hierarchy.pop();
    hierarchy.push(prod);
    return hierarchy.join("/");
  }
  getHierarchy():any[]{
    return this.router.url.split("/");
  }
  getSelectedCategory(){
    return this.getHierarchy()[this.getHierarchy().length-1]
  }
  getCategories():Observable<any>
  {
    return this.http.get(this.config.GET_CATEGORIE_LIST_URL)
  }
  replaceAllWith(element, toReplace, replaceWith) {
    return element.replace(new RegExp(toReplace, "g"), replaceWith).toLowerCase();
  }
  getEncodedURI(val){
    return this.httpVal.encodeValue(val);
  }

}
