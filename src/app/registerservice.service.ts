import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private registerUrl = 'http://localhost:3000/api/customers'
  constructor(private http: HttpClient) { }
  addRemote(customer):Observable<any>{
    
    return this.http.post(this.registerUrl,customer);
  }
}
