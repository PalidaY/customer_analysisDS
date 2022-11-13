import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from '../data-provider.service';
import { MyData } from '../models/data.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public data$: Observable<MyData>;
  public data2$: Observable<MyData>;
  public useridIn: String; 
  public priceminIn: String; 
  public pricemaxIn: String; 

  constructor(private dataProvider: DataProviderService) {}

  getAnswer(){
    this.data$ = this.dataProvider.getAnswer(this.useridIn);
    
  }
  getPrice(){
    this.data2$ = this.dataProvider.getPrice(this.priceminIn,this.pricemaxIn);
    
  }
}
