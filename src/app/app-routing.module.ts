import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DashBoardComponent} from './dash-board/dash-board.component';
import{CreateComponent} from  './create/create.component';
import{MsgComponent} from './msg/msg.component';
import{PushNotificationComponent as pushnotify} from './push-notification/push-notification.component';
const routes: Routes = [
  {path:'' ,redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard', component:DashBoardComponent} ,
  {path:'Create',component:CreateComponent} ,
  {path:'mgs',component:MsgComponent, outlet:"msg"} ,
  {path:'Pushnotify',component:pushnotify, }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


