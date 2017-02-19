import { Component, OnInit, ViewChild } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { MpfFundDetail } from '../mpf-fund-detail';
import { FilterParam } from '../filter-param';
import {MpfFilterLists} from  '../mpf-filter-lists';
import { Observable } from 'rxjs/Observable';
import { MpfFundTypeService } from '../mpf-fund-type.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-mpf-fund-detail',
  templateUrl: './mpf-fund-detail.component.html',
  styleUrls: ['./mpf-fund-detail.component.css'],
  providers: [MpfFundTypeService]
})
export class MpfFundDetailComponent implements OnInit {

  
  mpfFundDetail1: MpfFundDetail;
  mpfFundDetail2: MpfFundDetail;
  mpfFilterLists1: MpfFilterLists = new MpfFilterLists();
  model ={
    filterFundType:'',
    filterTrustee:''
  };
  mpf1Form= new FormGroup({
     filterFundType: new FormControl('',[]),
     filterTrustee: new FormControl('',[]),
     filterMpfId: new FormControl('', Validators.required)
  });

  @ViewChild(BaseChartDirective) rChart: BaseChartDirective;

  constructor(private listMpfService: MpfFundTypeService) {
    this.loadFunds();
    this.refreshFilters();
  }

  refreshFilters(){
     //console.log(this.model.filterFundType);
     
     
    this.listMpfService.getFilterFundTypeList(this.model.filterFundType, this.model.filterTrustee)
    .subscribe(detail=> {
        this.mpfFilterLists1 = detail;
        console.log(detail);
      });
    console.log('Complete loading filter list');
  }


  loadFunds() {
    console.log('Start loading MPF data');
    this.listMpfService.getMpfFundDetails()
      .subscribe(details => {
        this.mpfFundDetail1 = details[0];
        this.mpfFundDetail2 = details[1];
      });
    console.log('Complete loading MPF data');
  }



  ngOnInit() {


  }

}
