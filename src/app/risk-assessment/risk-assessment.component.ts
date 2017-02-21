import { Component, OnInit ,} from '@angular/core';
import { RiskTestQuestion } from '../model/risk-test-question';
import { RiskTestAnswer } from '../model/risk-test-answer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MpfFundService} from '../mpf-fund.service';
import { MpfFundDetail} from '../mpf-fund-detail';


@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.css']
})
export class RiskAssessmentComponent implements OnInit {

 riskCat : number = 0; 
 riskCatDesc:string; 
 form:FormGroup ;
 mpfFundDetails: MpfFundDetail[];  

  private questions: RiskTestQuestion[] = [
    {
      selected:'',
      question: 'What is the objective of your retirement investment?',
      answerOptions: [
        {
          key: 'A',
          text: 'To achieve a rate of return comparable to the Hong Kong Dollar bank deposit rate',
          score: 0
        },
        {
          key: 'B',
          text: 'To preserve the value of investment and try to beat inflation',
          score: 1
        }
        ,
        {
          key: 'C',
          text: 'To achieve an annual return of 10-15%',
          score: 2
        },
        {
          key: 'D',
          text: 'To achieve an annual return of over 15%',
          score: 3
        }]
    }
    ,

    {
       selected:'',
      question: 'How many years are you away from retirement?',
      answerOptions: [
        {
          key: 'A',
          text: 'Less than 5 years',
          score: 0
        },
        {
          key: 'B',
          text: '5 to 15 years',
          score: 1
        }
        ,
        {
          key: 'C',
          text: '16 to 20 years',
          score: 2
        },
        {
          key: 'D',
          text: 'Over 20 years',
          score: 3
        }]

    },


    {
       selected:'',
      question: 'Which of the following best describes your investment approach?',
      answerOptions: [
        {
          key: 'A',
          text: 'I cannot tolerate any loss',
          score: 0
        },
        {
          key: 'B',
          text: 'I am willing to accept up to 5% annual loss for a higher return',
          score: 1
        }
        ,
        {
          key: 'C',
          text: 'I am willing to accept up to 10% annual loss for a higher return',
          score: 2
        },
        {
          key: 'D',
          text: 'I am willing to accept over 15% annual loss for a higher return',
          score: 3
        }]

    },


    {
       selected:'',
      question: 'What makes up the biggest portion of your investments?',
      answerOptions: [
        {
          key: 'A',
          text: 'Bank deposits',
          score: 0
        },
        {
          key: 'B',
          text: 'Fixed income securities / Treasury bonds / Government bonds',
          score: 1
        }
        ,
        {
          key: 'C',
          text: 'Mutual funds / Unit trusts',
          score: 2
        },
        {
          key: 'D',
          text: 'Stocks',
          score: 3
        }]

    }
    ,
    {
       selected:'',
      question: 'Among the four hypothetical portfolios below, which one will you choose as your retirement investment?',
      answerOptions: [
        {
          key: 'A',
          text: 'Portfolio A: 3% annual return, 12% gain in the best year, 0% loss in the worst year',
          score: 0
        },
        {
          key: 'B',
          text: 'Portfolio B: 5% annual return, 25% gain in the best year, 8% loss in the worst year',
          score: 1
        }
        ,
        {
          key: 'C',
          text: 'Portfolio C: 8% annual return, 40% gain in the best year, 20% loss in the worst year',
          score: 2
        },
        {
          key: 'D',
          text: 'Portfolio D: 11% annual return, 50% gain in the best year, 38% loss in the worst year',
          score: 3
        }]

    }

  ];

 private score:number = 0;
 private isSubmitted:boolean = false;  
 private MpfFundDetail
onReset(){
  this.isSubmitted = false;
  this.score = 0 ;
}

 onSubmit(){
  
  this.score = 0 ;
   this.questions.forEach(function(question){
    console.log(question.selected);
      question.answerOptions.forEach(function(answerOption,index){
        if (question.selected == answerOption.key){
            this.score = this.score+ answerOption.score;
        }
      },this);
      
   },this);
  console.log(this.score);
   if (this.score>=14){
     this.riskCat = 3 ; 
     this.riskCatDesc = 'High';
  } else if (this.score>=6){
    this.riskCat = 2; 
     this.riskCatDesc = 'Medium';
   } else {
     this.riskCat = 1; 
     this.riskCatDesc = 'Low';

   }
   this.mpfFundService.getMpfFundDetails({riskCat:this.riskCat})
   .subscribe(details=>this.mpfFundDetails = details,
   ()=> {
     alert('error in loading the data, the server seems to be down');   
   }), function(){
     this.isSubmitted = true;
   };
   
   
   
   
 }



  constructor(private mpfFundService: MpfFundService) {
    this.form=  new FormGroup({
   option0: new FormControl('',Validators.required),
   option1: new FormControl('',Validators.required),
   option2: new FormControl('',Validators.required),
   option3: new FormControl('',Validators.required),
   option4: new FormControl('',Validators.required)

  });
   
  }
  
   
  
  ngOnInit() {
  }


}
