import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsService } from './breadcrumbs.service';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BreadcrumbsComponent],
  exports:[BreadcrumbsComponent],
  providers:[BreadcrumbsService]
})
export class BreadcrumbsModule { }
