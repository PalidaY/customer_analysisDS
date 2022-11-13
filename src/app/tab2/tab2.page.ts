import { Component, ElementRef, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { DataProviderService } from '../data-provider.service';
import { MyData } from '../models/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  @ViewChild('lineCanvas', {static: true}) private lineCanvas: ElementRef;
  @ViewChild('barCanvas', {static: true}) private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas', {static: true}) private doughnutCanvas: ElementRef;
  @ViewChild('barCanvas2', {static: true}) private barCanvas2: ElementRef;
  @ViewChild('barCanvas3', {static: true}) private barCanvas3: ElementRef;


  public data3$: Observable<MyData>;
  
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  barChart2: any;
  barChart3: any;

  showData1=[];   
  showLabel1=[];
  showData2=[];
  showLabel2=[];
  showData3=[];
  showLabel3=[];  
  showData4=[];
  showLabel4=[];
  showData5=[];
  showLabel5=[];  

  constructor(private myDataProvider: DataProviderService) { 
    Chart.register(...registerables);
  }
  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ionViewDidEnter() {
    this.getType();
    this.doughnutChartMethod();
    this.myDataProvider.getData2(this.showLabel2,this.showData2,this.doughnutChart);
    this.lineChartMethod();
    this.myDataProvider.getData1(this.showLabel1,this.showData1,this.lineChart);
    this.barChartMethod();
    this.myDataProvider.getData3(this.showLabel3,this.showData3,this.barChart)
    this.barChartMethod2();
    this.myDataProvider.getData4(this.showLabel4,this.showData4,this.barChart2)
    this.barChartMethod3();
    this.myDataProvider.getData5(this.showLabel5,this.showData5,this.barChart3)
     
  }

  getType(){
    this.data3$ = this.myDataProvider.getType();
    
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.showLabel1,
        datasets: [
          {
            label: 'Revenue per day',
            fill: false,

            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.showData1,
            spanGaps: false,
          }
        ]
      }
    });
  }

  
  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['cart', 'view', 'purchase', 'remove_from_cart'],
        datasets: [{
          label: '# of each type',
          data: this.showData2,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  barChartMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.showLabel3,
        datasets: [{
          label: 'Days of week',
          data: this.showData3,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {

      }
    });
  }

  barChartMethod2() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart2 = new Chart(this.barCanvas2.nativeElement, {
      type: 'bar',
      data: {
        labels: this.showLabel4,
        datasets: [{
          label: 'product_id',
          data: this.showData4,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {

      }
    });
  }

  barChartMethod3() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart3 = new Chart(this.barCanvas3.nativeElement, {
      type: 'bar',
      data: {
        labels: this.showLabel5,
        datasets: [{
          label: 'user id',
          data: this.showData5,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {

      }
    });
  }
}