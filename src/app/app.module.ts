import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MsgComponent } from './msg/msg.component';
import { CreateComponent } from './create/create.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import{PushNotificationService} from './push-notification.service';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    MsgComponent,
    CreateComponent,
    PushNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
