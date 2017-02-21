import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FundTypeDetail } from './fund-type-detail';
import { MpfFundTypeStat} from './mpf-fund-type-stat';
import { MpfFundDetail} from './mpf-fund-detail';
import { OperationResult} from './operation-result';
import { MpfFilterLists} from './mpf-filter-lists';
import { environment } from '../environments/environment';
import { Observable }     from 'rxjs/Rx';
import {URLSearchParams, QueryEncoder} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class MpfFundService {

    private fundtypelist = environment.api_fund_type_list; 
    private fundtypeScrapeUrl = environment.api_fund_type_action;
    private URL_FUND_TYPE_STAT = environment.api_fund_type_stat;
    private URL_FUND_DETAIL = environment.api_fund_detail;
    private URL_FILTER_FUND_TYPE_LIST = environment.api_fund_type_filter;

    constructor(private http: Http) { }

    
    getMpfFundDetails(criteria:any): Observable<MpfFundDetail[]>{
        var params = new URLSearchParams();
         params.set('riskCat', criteria.riskCat); // the user's search value

        return this.http.get(this.URL_FUND_DETAIL,{search:params})
        .map(response => response.json() as MpfFundDetail[])
        .catch(this.handleError);
    }
 
    getFundTypeStats(asOfDate:string): Observable<MpfFundTypeStat[]>{
        return this.http.get(this.URL_FUND_TYPE_STAT + asOfDate)
        .map(response => response.json() as MpfFundTypeStat[])
        .catch(this.handleError);
    }
    getFundTypes(): Observable<FundTypeDetail[]> {
       
        return this.http.get(this.fundtypelist)
                        .map(reponse => reponse.json() as FundTypeDetail[])
                        .catch(this.handleError);
        
    
            
    }
    getFilterFundTypeList(filterFundType: string, filterTrustee : string) : Observable<MpfFilterLists>{
        // console.log('filterFundType:' + filterFundType);
       return this.http.get(this.URL_FILTER_FUND_TYPE_LIST +
         `?filterFundType=${filterFundType}&filterTrustee=${filterTrustee}`)
        .map(response => response.json() as MpfFilterLists)
        .catch(this.handleError);
    }
    performAction(requestAction:string): Observable<OperationResult> {
        return this.http.post(this.fundtypeScrapeUrl + requestAction,{})
        .map(function(response) {
            return response.json() as OperationResult;
        })
        .catch(this.handleError);        
        
    }
    
    private handleError(error: any): Observable<any> {
        console.error('An error occurred:', error); // for demo purposes only
        return Observable.create(error.message || error);
      }
    




}
