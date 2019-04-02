import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginserviceService} from '../loginservice.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customerList =[];
  constructor(private router: Router,private loginService: LoginserviceService) { }
  username = "";
  password = "";
  ngOnInit() {
    this.loginService.getRemoteCustomers().subscribe((customers) => {
      this.customerList = customers;
      this.checkLogin();
      
    });
  }
  checkLogin() {
    for (var i = 0; i < this.customerList.length; i++) {
      if ((this.username == this.customerList[i].name) && (this.password == this.customerList[i].password)) {
        this.router.navigate(['./dashboards']);
      }
    }
  }
  onRegister(){
    console.log("Register Working function")
    this.router.navigate(['./register']);
  }
  onDashboards(){
    console.log("dashboards function is working");
    this.router.navigate(['/dashboards']);
  }
  goForgotPassword(){
    this.router.navigate(['/forgotpassword']);
  }
  
}
