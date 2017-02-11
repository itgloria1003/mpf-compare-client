import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FundTypeDetail } from './fund-type-detail';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MpfFundTypeService {

    private fundtypeUrl = "http://localhost:8080/fundtype/list"; 
    constructor(private http: Http) { }

    getFundTypes(): Promise<FundTypeDetail[]> {
        return this.http.get(this.fundtypeUrl)
                       .toPromise()
                       .then(function(response){
                           console.log(response.json());
                           var types=  response.json() as FundTypeDetail[];
                           console.log(types);
                           return types;
                       }).catch(this.handleError);
        
    
            
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred:', error); // for demo purposes only
        alert('An error has occurred in loading the data set!');
        return Promise.reject(error.message || error);
      }
    
//          }
//        return [{
//            fundType: "A",
//            investObjective: "object",
//            investInstruments: "int",
//            riskLevel: "low",
//            riskLevelScore: 1,
//            majarRisk: "Major Risk",
//
//            feature: "feature"
//        }




}
