import { Component,OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { Pname } from './Pname';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'form2';
  ProjectName:string="";
  arr: Pname[] = [];  
  Email:string="";
  ProjectStatus:string="";
  isClicked:Boolean=false;
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   
  userlogin: string="";
    
  Submit()
  {
    this.isClicked=true;
     console.log(this.ProjectName);
     console.log(this.Email);
     console.log(this.ProjectStatus);
     
  }  
  ngOnInit(): void {
    
  }
}
