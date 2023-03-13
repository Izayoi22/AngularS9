import { Component } from '@angular/core';
import { ServiciosApiService } from 'src/app/services/servicios-api.service';

@Component({
  selector: 'app-infoview',
  templateUrl: './infoview.component.html',
  styleUrls: ['./infoview.component.css']
})
export class InfoviewComponent {
 
  constructor (private ServiciosApi: ServiciosApiService){}

  ngOnInit(){
    this.getServiciosApi()
  }


  getServiciosApi(){
    this.ServiciosApi.getApiInfo()
    .subscribe(data=>{
      console.log(data);
    
    })
  }
}
