import { Component, OnInit } from '@angular/core';

import { RegisterserviceService } from '../registerservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  customer = {};
  constructor(private registerService: RegisterserviceService,private router:Router) { }

  ngOnInit() {}
 
  addRemote(){
    
    this.registerService.addRemote(this.customer).subscribe(()=>{this.router.navigate(['/login']);});
    
   }
 
  
}
