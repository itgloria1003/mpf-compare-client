import { Component, OnInit } from '@angular/core';
import { MpfFundService} from '../mpf-fund.service';
import {FundTypeDetail} from '../fund-type-detail';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-list-fund-type',
  templateUrl: './list-fund-type.component.html',
  styleUrls: ['./list-fund-type.component.css'],
  providers: [MpfFundService]
})
export class ListFundTypeComponent implements OnInit {
    mpfDetails:FundTypeDetail[];
    
    constructor(private listMpfService: MpfFundService) { 
    
     
      this.loadFundTypes();
       
    }
 
  public loadFundTypes(){
     console.log('Start loading data');
     this.listMpfService.getFundTypes()
     .subscribe(details => this.mpfDetails = details);
     console.log('Complete loading data');
  }

  ngOnInit() {
  }
 
    
  
}
