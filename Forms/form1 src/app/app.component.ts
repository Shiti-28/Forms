import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { Employee } from './Employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'form1';
  Email:string="";
  arr: Employee[] = [];  
  Password:string="";
  Subscriptions:string="";
  isClicked:Boolean=false;
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   
  userlogin: string="";
    
  onClickSubmit()
  {
    this.isClicked=true;
    let emp=new Employee();
    emp.Email=this.Email;
    emp.Subscriptions=this.Subscriptions;
    emp.Password=this.Password;
    this.arr.push(emp);
    console.log(this.arr);
  }  
  ngOnInit(): void {
    
  }
}
