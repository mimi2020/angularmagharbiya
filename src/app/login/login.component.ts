import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup
  resultatlogin:any
  constructor (private service:MyserviceService,private  formbuilder:FormBuilder, private router:Router){}
  ngOnInit(): void {
    this.form=this.formbuilder.group({
    username:['',Validators.required],
    password:['',Validators.required],
  })
}

  loginzeineb(){
    alert ("ok")

     let data={"username":this.form.value.username,"password":this.form.value.password}
    // console.log("data for login",data)
    // let formdata=new FormData()
    // formdata.append("username",this.form.value.username)
    // formdata.append("password",this.form.value.password)

    this.service.login(data).subscribe(
 (res) => {
   console.log("res login:", res);
   this.resultatlogin=res;
   localStorage.setItem("token",this.resultatlogin.accessToken)
   localStorage.setItem("idconnected",this.resultatlogin.id)
   localStorage.setItem('state','0')
   console.log("state",localStorage.getItem("state"))
localStorage.setItem("role",this.resultatlogin.role);
alert(localStorage.getItem("role"));
this.router.navigateByUrl("/homeclient")
}
)
}
}

