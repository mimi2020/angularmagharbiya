import { Component, ElementRef, OnInit } from '@angular/core';
declare var $: any;
import WOW from "../../assets/lib/wow/wow.min.js"
import Counterup from "../../assets/lib/counterup/counterup.min.js"

import 'owl.carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
    constructor(private elementRef: ElementRef) {}
 // Spinner
 spinner () {
    setTimeout(function () {
       
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
ngAfterViewInit() {
    $(this.elementRef.nativeElement).find('.counter-up').counterUp();
  }
  ngOnInit(): void {
    $(this.elementRef.nativeElement).find('.counter-up').counterUp();
    $(document).ready(() => {
        $('.owl-carousel').owlCarousel({
          // Owl Carousel options here
        });

        $('[data-toggle="counter-up"]').find('.counter-up').counterup({
            delay: 10,
            time: 1000
          });
      
        
            
           
      }
      
      
      
      
      );
      $(document).ready(() => {
     

        $('[data-toggle="counter-up"]').find('.counter-up').counterup({
            delay: 10,
            time: 1000
          });
      
        
            
           
      }
      
      
      
      
      );
      new WOW().init();
   this. spinner();

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
      
    margin: 45,
    dots: false,
    loop: true,
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

}
