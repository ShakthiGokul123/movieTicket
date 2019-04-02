import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-bookingmovie',
  templateUrl: './bookingmovie.component.html',
  styleUrls: ['./bookingmovie.component.scss'],
})
export class BookingmovieComponent implements OnInit {
  customer={};
  constructor(private router: Router) { }

  ngOnInit() {}
  onPayment(){
   this.router.navigate(['/payment']);
  }
}
