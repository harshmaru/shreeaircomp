import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainProductsComponent } from './components/main-products/main-products.component';
import { ProductSwitcherComponent } from './components/products/product-switcher/product-switcher.component';
export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent ,
        children:[

        ],
        data:{
            title: 'Home',
            path:''
        }
    },
    { 
        path: 'about', 
        component: AboutComponent,
        data:{
            title: 'About Us',
            path : 'about'
        } 
    },
    {
        path: 'products',
        component: MainProductsComponent,
        data: {
            title: 'Products',
            path: 'products'
        },
    },
    {
        path: 'products/:category',
        component: ProductSwitcherComponent,
        data: {
            title: 'Products',
            path: 'products'
        }
    },
    {
        path: 'products/:category/:product',
        component: ProductSwitcherComponent,
        data: {
            title: 'Products',
            path: 'products'
        }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {
            title: 'Contact Us',
            path: 'contact'
        }
    },
    { 
        path: '**', 
        redirectTo:'',
        data:{
            title: '404',
            path : ''
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }