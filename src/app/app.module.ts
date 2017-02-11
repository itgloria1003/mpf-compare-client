import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListFundTypeComponent } from './list-fund-type/list-fund-type.component';
import { MpfFundTypeService} from './mpf-fund-type.service';
import { Nl2brPipePipe } from './nl2br-pipe.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    ListFundTypeComponent,
    Nl2brPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MpfFundTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
