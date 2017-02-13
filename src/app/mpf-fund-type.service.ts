import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FundTypeDetail } from './fund-type-detail';
import { MpfFundTypeStat} from './mpf-fund-type-stat';
import { OperationResult} from './operation-result';
import { environment } from '../environments/environment';
import { Observable }     from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class MpfFundTypeService {

    private fundtypelist = environment.api_fund_type_list; 
    private fundtypeScrapeUrl = environment.api_fund_type_action;
    private URL_FUND_TYPE_STAT = environment.api_fund_type_stat;
    constructor(private http: Http) { }


 
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
