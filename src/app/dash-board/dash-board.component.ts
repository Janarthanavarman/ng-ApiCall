import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../employee.service'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  EmpList :any;//=[{"id":1,"name":"Load","gender":"M","department":"A","city":"A"}];
  status:number;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.GetemployeeList();    
  }

  GetemployeeList(){
    this.employeeService.GetEmployee().subscribe(x=> 
      {
        this.EmpList =x
        //console.log(x.body)
    });      
  }

}
