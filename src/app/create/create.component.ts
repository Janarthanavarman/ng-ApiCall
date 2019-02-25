import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
Emp : any ={
    "ID": 0,
    "Name": "",
    "Gender": "",
    "Department": "",
    "City": ""
  };
Gender:string[] =['Male','Female'];
citys:string[] =['Cbe','Chennai'];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }
  add(){

    // this.Emp ={
    //   "id": 0,
    //   "name": "string",
    //   "gender": "string",
    //   "department": "string",
    //   "city": "string"
    // };
    this.employeeService.SetEmployee(this.Emp)
    .subscribe(
      success => alert("Done"),
      error => alert(error)
    );;


  }

}
