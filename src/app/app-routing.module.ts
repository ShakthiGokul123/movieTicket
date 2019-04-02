import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { BookingmovieComponent } from './bookingmovie/bookingmovie.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboards',component:DashboardsComponent},
  {path:'bookingmovie',component:BookingmovieComponent},
  {path:'payment',component:PaymentComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
