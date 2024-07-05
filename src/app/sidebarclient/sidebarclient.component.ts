import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservices.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarclient',
  templateUrl: './sidebarclient.component.html',
  styleUrls: ['./sidebarclient.component.css']
})
export class SidebarclientComponent implements OnInit {
  adminreseaux="admin réseaux"
  AdminDSI="AdminDSI"
  AdminComptabilité="AdminComptabilité"
  AdminRH="AdminRH"
  employe="employe"
  admin="admin"
  client="client"
  idconnected:any
  role:any

  constructor (private service:MyserviceService,private  formbuilder:FormBuilder, private router:Router){}
  ngOnInit(): void {
    this.role=localStorage.getItem("role")
    this.idconnected=localStorage.getItem("idconnected")
    console.log("role in sidebar*************",this.role)
    ;

  }

  logout()
  {

    localStorage.removeItem("idconnected");
    //localStorage.removeItem("token");
    console.log("token",localStorage.getItem("token"))
    this.service.logout(localStorage.getItem("token")).subscribe(
      (res)=>{alert("logout");
    this.router.navigateByUrl("/")},
      (error)=>{console.log("error",error)}
    )
  }










}



