import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
import WOW from "../../assets/lib/wow/wow.min.js"
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  form:FormGroup
  resultatlogin:any
  
  constructor (private service:MyserviceService,private  formbuilder:FormBuilder, private router:Router){}



ngOnInit(): void {

  this.form=this.formbuilder.group({
    username:['',Validators.required],
    password:['',Validators.required],
    email:['',Validators.required],
    to:['',Validators.required],
    subject:['',Validators.required],
    content:['',Validators.required],
  })
  new WOW().init();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});

 // Dropdown on mouse hover
 const $dropdown = $(".dropdown");
 const $dropdownToggle = $(".dropdown-toggle");
 const $dropdownMenu = $(".dropdown-menu");
 const showClass = "show";
 
 $(window).on("load resize", function() {
     if (this.matchMedia("(min-width: 992px)").matches) {
         $dropdown.hover(
         function() {
             const $this = $(this);
             $this.addClass(showClass);
             $this.find($dropdownToggle).attr("aria-expanded", "true");
             $this.find($dropdownMenu).addClass(showClass);
         },
         function() {
             const $this = $(this);
             $this.removeClass(showClass);
             $this.find($dropdownToggle).attr("aria-expanded", "false");
             $this.find($dropdownMenu).removeClass(showClass);
         }
         );
     } else {
         $dropdown.off("mouseenter mouseleave");
     }
 });


 // Facts counter
 $('[data-toggle="counter-up"]').counterUp({
     delay: 10,
     time: 2000
 });
 
 
 // Back to top button
 $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
         $('.back-to-top').fadeIn('slow');
     } else {
         $('.back-to-top').fadeOut('slow');
     }
 });
 $('.back-to-top').click(function () {
     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
     return false;
 });


 // Testimonials carousel
 $(".testimonial-carousel").owlCarousel({
     autoplay: true,
     smartSpeed: 1500,
     dots: true,
     loop: true,
     center: true,
     responsive: {
         0:{
             items:1
         },
         576:{
             items:1
         },
         768:{
             items:2
         },
         992:{
             items:3
         }
     }
 });


 // Vendor carousel
 $('.vendor-carousel').owlCarousel({
     loop: true,
     margin: 45,
     dots: false,
    // loop: true,
     autoplay: true,
     smartSpeed: 1000,
     responsive: {
         0:{
             items:2
         },
         576:{
             items:4
         },
         768:{
             items:6
         },
         992:{
             items:8
         }
     }
 });
 
}


  sendmail(){
    let formdata= new FormData()
    formdata.append("subject",this.form.value.subject)
    formdata.append("content",this.form.value.content)
    formdata.append("from",this.form.value.email)
    formdata.append("to","benromdhane.zeineb@esprit.tn")

    this.service.sendmail(formdata).subscribe(
      (res)=>{console.log("sucess to send mail")},
      (error)=>{console.log(error)}
    )
  }
}
