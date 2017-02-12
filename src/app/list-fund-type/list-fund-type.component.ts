import { Component, OnInit } from '@angular/core';
import { MpfFundTypeService} from '../mpf-fund-type.service';
import {FundTypeDetail} from '../fund-type-detail';
import {OperationResult} from '../operation-result';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-list-fund-type',
  templateUrl: './list-fund-type.component.html',
  styleUrls: ['./list-fund-type.component.css'],
  providers: [MpfFundTypeService]
})
export class ListFundTypeComponent implements OnInit {
    mpfDetails:FundTypeDetail[];
    actionResult: OperationResult ;
    touched : boolean = false;
    scrapeObservable: Observable<OperationResult>; 

    constructor(private listMpfService: MpfFundTypeService) { 
      this.actionResult= new OperationResult();
     
      this.loadFundTypes();
       
    }
 
  loadFundTypes(){
     console.log('Start loading data');
     this.listMpfService.getFundTypes()
     .subscribe(details => this.mpfDetails = details);
     console.log('Complete loading data');
  }

  ngOnInit() {
  }
  onClickScrape(){
    console.log('Start scraping data');
    this.touched = true;
    this.scrapeObservable = this.listMpfService.performAction('scrape');
    this.scrapeObservable .subscribe(details => {
      console.log('Complete scraping data');
      this.actionResult = details;
      this.loadFundTypes();
    });
    
  }

  onClickDelete(){
    console.log('Start deleting the cache');
    this.touched = true;
    this.listMpfService.performAction('delete').subscribe(details => {
        console.log('Complete deleting the cache');
        this.actionResult = details;
        this.loadFundTypes();
    
    });

    
  }

}
