import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MpfFundService} from '../mpf-fund.service';
import { MpfFundTypeStat } from '../mpf-fund-type-stat';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-fund-type-chart',
  templateUrl: './fund-type-chart.component.html',
  styleUrls: ['./fund-type-chart.component.css']
})
export class FundTypeChartComponent implements OnInit {
  showChartForm = new FormGroup({
     asOfDate: new FormControl('',Validators.required)
  });
  constructor(private MpfFundService: MpfFundService) { }

  ngOnInit() {
  }

//Pie
  private pieChartLabels:string[] = [];
  private pieChartData:number[] = [];
  private statList :MpfFundTypeStat[] = [] ;
  
  public pieChartType:string = 'pie';
// List 
  asOfDateList = ['30.09.2016','30.06.2016']; 

  public showChart(e:any):void{
    console.log(this.showChartForm.controls['asOfDate'].value);
    this.MpfFundService.getFundTypeStats(this.showChartForm.controls['asOfDate'].value)
    .subscribe(response => {
      this.statList = response;
      let chartData = []; 
        
      for (var i = 0; i<this.statList.length; i++){
        this.pieChartLabels.push(this.statList[i].fundType);
        chartData.push(this.statList[i].netAssetValue);
      }
      this.updateChart( chartData);
    });
    
      

     
    

  } 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  @ViewChild( BaseChartDirective ) chart: BaseChartDirective;

  private updateChart(chartData){
    let clone = JSON.parse(JSON.stringify(this.pieChartData));
    clone[0].data = chartData;
    this.pieChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
    
    
  }
}
