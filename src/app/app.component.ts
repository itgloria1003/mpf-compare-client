import { Component } from '@angular/core';
import { ListFundTypeComponent } from './list-fund-type/list-fund-type.component';
import { MpfFundDetailComponent } from './mpf-fund-detail/mpf-fund-detail.component';

import { MpfFundTypeService } from './mpf-fund-type.service';
import { OperationResult } from './operation-result';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MpfFundTypeService]
})
export class AppComponent {
  title = 'MPF compare';
  activeTab : number  ;
  isLoading : boolean = false;
  actionResult: OperationResult= new OperationResult();
  touched: boolean = false;
  operationResult: Observable<OperationResult>;
  listFundTypeComp: ListFundTypeComponent;
  mpfFundDetailComp: MpfFundDetailComponent;

  constructor(private listMpfService: MpfFundTypeService) {
     this.activeTab = 0 ;
  }

  selectTab(tabIndex:number){
    this.activeTab = tabIndex; 
   
  }

 
  onClickScrape() {
    console.log('Start scraping data');
    this.touched = true;
    this.isLoading = true;
    this.operationResult = this.listMpfService.performAction('scrape');
    this.operationResult.subscribe(details => {
      console.log('Complete scraping data');
       this.isLoading = false; 
      this.actionResult = details;
      
    });
   
  }

  onClickDelete() {
    console.log('Start deleting the cache');
    this.touched = true;
    this.isLoading= true;
    this.listMpfService.performAction('delete').subscribe(details => {
      console.log('Complete deleting the cache');
      this.isLoading = false; 
       this.actionResult = details;

    });
    

  }
}
