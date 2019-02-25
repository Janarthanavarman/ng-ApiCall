import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }

  msg : string[]=["Test"];
  add(msg : string){
     this.msg.push(msg);
  }

  clear(){
    this.msg=[];
  }
}
