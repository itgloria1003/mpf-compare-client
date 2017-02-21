import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// NG2-Charts
import { ChartsModule } from 'ng2-charts/ng2-charts';
//Reactive forms
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ListFundTypeComponent } from './list-fund-type/list-fund-type.component';
import { MpfFundTypeService} from './mpf-fund-type.service';
import { Nl2brPipePipe } from './nl2br-pipe.pipe';
import { FundTypeChartComponent } from './fund-type-chart/fund-type-chart.component';
import { MpfFundDetailComponent } from './mpf-fund-detail/mpf-fund-detail.component';
import { NullToNaPipePipe } from './null-to-na-pipe.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe'; 


@NgModule({
  declarations: [
    AppComponent,
    ListFundTypeComponent,
    Nl2brPipePipe,
    FundTypeChartComponent,
    MpfFundDetailComponent,
    NullToNaPipePipe,
    SpinnerComponent,
    FeedCardComponent,
    StripHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [MpfFundTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
