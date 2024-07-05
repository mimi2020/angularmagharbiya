import { Component, ElementRef, OnInit } from '@angular/core';
declare var $: any;
import WOW from "../../assets/lib/wow/wow.min.js"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit{
    constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    $(this.elementRef.nativeElement).find('.counter').counterUp();
    $(document).ready(() => {
     

        $('[data-toggle="counter-up"]').find('.counter-up').counterup({
            delay: 10,
            time: 1000
          });
      
        
            
           
      }
      
      
      
      
      );
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
   new WOW().init();

   // Testimonials carousel
 
   
  }
}