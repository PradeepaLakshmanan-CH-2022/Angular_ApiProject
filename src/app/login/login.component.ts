import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { StudentServiceService } from '../student-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm !: FormGroup;
  public loginObj = new User();
  constructor(private fb :FormBuilder, private router : Router,private api : StudentServiceService) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required]
    });
   localStorage.clear();
  }
  login(){
  
  this.loginObj.emailAddress = this.loginForm.value.email;
  this.loginObj.password = this.loginForm.value.password;
  this.api.login(this.loginObj)
  .subscribe(res=>{
    Swal.fire('Login Successful')
    this.router.navigate(['department']);
    localStorage.setItem('token',res.token);
    localStorage.setItem('userType',res.userType);
  },err=>{
    Swal.fire("Oops!", "Something went wrong", "error"); 
  })
   }
  }