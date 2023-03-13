import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosApiService {
        
  constructor(private http: HttpClient){}
           
    getApiInfo(){
      return this.http.get('https://640f81b44ed25579dc50b3b0.mockapi.io/inforandom');
    }
  
  
}
