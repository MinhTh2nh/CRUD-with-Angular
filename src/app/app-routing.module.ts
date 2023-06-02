import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {
     path: 'user',
     component: UserdashboardComponent 
  
  },
  {
     path: 'product', 
    component: ProductDashboardComponent 
  
  },
  {
    path: '', 
   component:  HomepageComponent
 
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
