import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  onBooking(){
  this.router.navigate(['/bookingmovie']);
  }

}
