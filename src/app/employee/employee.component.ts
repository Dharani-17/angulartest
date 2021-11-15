import { Component, OnInit } from '@angular/core';
import { SpyserviceService } from '../spyservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  salSlip:string;

  constructor(private authService:SpyserviceService) { 
    this.authService.authenticate();
  }

  ngOnInit(): void {
  }
 // getSalarySlip()
  //{
    //if(this.authService.checkAuthentication())
    //{
      //return "Salary Slip";
    //}
    //return "Not Authenticated";
  //}
  getSalarySlip()
  {
    if(this.authService.checkAuthentication())
    {
      this.salSlip="Salary slip";
    }else{
      this.salSlip="Not Authenticated";
    }
  }

}
