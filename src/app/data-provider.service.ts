import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyData } from './models/data.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  public ret;
  url = "http://c243-35-245-183-149.ngrok.io/"
  
  constructor(public http: HttpClient) { }
  
  
  insertdata(dateIn,user_idIn,product_idIn,priceIn,event_typeIn){
    console.log('date='+dateIn+'&user_idIn='+user_idIn+'&product_idIn='+product_idIn+'&priceIn='+priceIn+'&event_typeIn='+event_typeIn)
    this.ret=this.http.get(this.url+"/insert?event_time="+dateIn+"&user_id="+user_idIn+"&product_id="+product_idIn+"&price="+priceIn+"&event_type="+event_typeIn).subscribe(data => {
      console.log(data)
    })
    console.log(this.ret)
    
  }
  getType(){
    return this.http.get<MyData>(this.url+"/getdata6")
  }
  getAnswer(userid){
    return this.http.get<MyData>(this.url+"/search?user_id="+userid)
  }
  getPrice(pricemin,pricemax){
    return this.http.get<MyData>(this.url+"/searchprice?pricemin="+pricemin+"&pricemax="+pricemax)
  }
  
  getData1(listLabel, listData, chart) {
    this.http.get(this.url+'/getdata1').subscribe(data =>
    {
      for(let i=0; i<data['data'].length;i++) {
        listData.push(data['data'][i]['price']);
        listLabel.push(data['data'][i]['date']);
      }
      console.log(listLabel);
      console.log(listData);
      chart.update(0);
    
    });
  }
 
  getData2(listLabel, listData, chart) {
    this.http.get(this.url+'/getdata2').subscribe(data =>
    {
      for(let i=0; i<data['data'].length;i++) {
        listData.push(data['data'][i]['event_time'])
        listLabel.push(data['data'][i]['event_type']);
      }
      console.log(listLabel);
      console.log(listData);
      chart.update(0);
    
    });
  }

  getData3(listLabel, listData, chart) {
    this.http.get(this.url+'/getdata3').subscribe(data =>
    {
      for(let i=0; i<data['data'].length;i++) {
        listData.push(data['data'][i]['price'])
        listLabel.push(data['data'][i]['weekday']);
      }
      console.log(listLabel);
      console.log(listData);
      chart.update(0);
    
    });
  }

  getData4(listLabel, listData, chart) {
    this.http.get(this.url+'/getdata4').subscribe(data =>
    {
      for(let i=0; i<data['data'].length;i++) {
        listData.push(data['data'][i]['user_buys'])
        listLabel.push(data['data'][i]['product_id']);
      }
      console.log(listLabel);
      console.log(listData);
      chart.update(0);
    
    });
  }

  
  getData5(listLabel, listData, chart) {
    this.http.get(this.url+'/getdata5').subscribe(data =>
    {
      for(let i=0; i<data['data'].length;i++) {
        listData.push(data['data'][i]['no_of_purchased_items'])
        listLabel.push(data['data'][i]['user_id']);
      }
      console.log(listLabel);
      console.log(listData);
      chart.update(0);
    
    });
  }
}
