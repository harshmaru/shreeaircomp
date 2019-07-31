import { Injectable, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "src/app/common.service";
import { Config } from "src/app/config";

@Injectable({
  providedIn: "root"
})
export class MainProductService implements OnInit{

    constructor(private http: HttpClient, private commonSvc: CommonService, private config: Config) { }
    
    ngOnInit(){}

    getDynamicCategories():Observable<any>{
        return this.http.get(`${this.config.GET_DYNAMIC_CATEGORY_POSTS}`);
    }

}
