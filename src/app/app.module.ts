import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import {BookingmovieComponent} from './bookingmovie/bookingmovie.component'
import { PaymentComponent } from './payment/payment.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent,DashboardsComponent,
    BookingmovieComponent,PaymentComponent,ForgotpasswordComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
