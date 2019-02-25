import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse } from  '@angular/common/http'
import {Observable,of} from 'rxjs'
import {tap,catchError} from 'rxjs/operators'
import {PushNotificationService} from  './push-notification.service';

import {MsgService} from './msg.service'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  static APIUrl :string ='Https://localhost:5001/api/StudentAPI';  
  NotifyData : Array<any> =[];
  constructor(private httpClient:HttpClient,private msgService:MsgService,
             private _notificationService:PushNotificationService) { }


  GetEmployee() : Observable<any>{  //Observable<HttpResponse<any>>
    var url = `${EmployeeService.APIUrl}`;
    return this.httpClient.get<any>(url)
    .pipe(
      tap(_ => this.WriteMsg(`called StudentAPI Get${url}`)),
      catchError(this.handleError<any>(`StudentAPI get Error`))
    );
  }

  SetEmployee(data:any) {  //Observable<HttpResponse<any>>
    var url = `${EmployeeService.APIUrl}`;
    console.log(data);
    return this.httpClient.put(url,data)
    .pipe(      
      tap(_ => {this.WriteMsg(`called StudentAPI put ${url}`),
              this.NotifyData.push({
                'title': 'New Employee Added',
                'alertContent': `called StudentAPI put ${url}`
            });
            this._notificationService.generateNotification( this.NotifyData);
  }),
      catchError(this.handleError(`StudentAPI put Error`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.WriteMsg(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  WriteMsg(mgg :string){
    this.msgService.add(`EmployeeService : ${mgg}`);
  }
}
