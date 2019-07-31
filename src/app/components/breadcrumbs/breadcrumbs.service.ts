import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class BreadcrumbsService {
  constructor(private router: Router) {}
  getRouteData(): Observable<any> {
    return this.router.events;
  }
  redirect(url) {
    this.router.navigateByUrl(url);
  }
  replaceAllWith(element, toReplace, replaceWith) {
    return element
      .replace(new RegExp(toReplace, "g"), replaceWith)
      .toLowerCase();
  }
}
