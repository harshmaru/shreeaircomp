import { Injectable, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonService } from "src/app/common.service";
import { Config } from "src/app/config";

@Injectable({
    providedIn: "root"
})
export class ContactService {

    constructor(private http: HttpClient, private config: Config) { }

    postMail(data) : Observable<any> {
        const headers = new HttpHeaders().set("Content-Type", "text/plain; charset=utf-8");
        return this.http.post(this.config.POST_EMAIL_CONTACT_US,data,{headers,responseType:'text'})
    }

}
