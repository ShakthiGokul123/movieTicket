import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private registerUrl = 'http://localhost:3000/api/customers'
  constructor(private http: HttpClient) { }
  getRemoteCustomers(): Observable<[]>{
    console.log(this.registerUrl);
  return this.http.get<[]>(this.registerUrl); 
  }
}
