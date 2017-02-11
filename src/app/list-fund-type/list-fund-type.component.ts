import { Component, OnInit } from '@angular/core';
import { MpfFundTypeService} from '../mpf-fund-type.service';
import {FundTypeDetail} from '../fund-type-detail';


@Component({
  selector: 'app-list-fund-type',
  templateUrl: './list-fund-type.component.html',
  styleUrls: ['./list-fund-type.component.css'],
  providers: [MpfFundTypeService]
})
export class ListFundTypeComponent implements OnInit {
    mpfDetails:FundTypeDetail[];
    
     

    constructor(listMpfService: MpfFundTypeService) { 
       listMpfService.getFundTypes().then(details => this.mpfDetails = details)
       console.log(this.mpfDetails);

      console.log('get fund type:' + this.mpfDetails);

    }
 

  ngOnInit() {
  }

}
