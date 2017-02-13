import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MpfFundTypeService} from '../mpf-fund-type.service';
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
  constructor(private mpfFundTypeService: MpfFundTypeService) { }

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
    this.mpfFundTypeService.getFundTypeStats(this.showChartForm.controls['asOfDate'].value)
    .subscribe(response => {
      this.statList = response;
      this.pieChartData = [];
      this.pieChartLabels = [];
      for (var i = 0; i<this.statList.length; i++){
        this.pieChartData.push(this.statList[i].netAssetValue);
        this.pieChartLabels.push(this.statList[i].fundType);
        
      }
      this.updateChart();
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

  private updateChart(){
   this.chart.ngOnChanges({});
  }
}
