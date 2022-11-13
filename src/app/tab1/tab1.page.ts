import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from '../data-provider.service';
import { MyData } from '../models/data.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


    public data$: Observable<MyData>;
    public dateIn: String;
    public user_idIn: String; 
    public product_idIn: String;
    public priceIn: String; 
    public event_typeIn: String; 
    public confirmedResult: String;  
     
  
    constructor(private dataProvider: DataProviderService) {
     
    }
  
    insertdata() {
      this.dataProvider.insertdata(this.dateIn, this.user_idIn,this.product_idIn,this.priceIn,this.event_typeIn);
      this.confirmedResult = "Your data has added to database";
    }
  
}
