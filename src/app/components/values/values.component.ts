import { Component, OnInit } from "@angular/core";
// import * as $ from 'jquery';
declare var $ :any ;

@Component({
  selector: "sac-values",
  templateUrl: "./values.component.html",
  styleUrls: ["./values.component.css"]
})
export class ValuesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
    $(".about-carousel-item").owlCarousel({
      pagination: false,
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 2]
    });

    // Custom Navigation Events
    $(".clients-navigation .next").click(function() {
      $(".about-carousel-item").trigger("owl.next");
    });
    $(".clients-navigation .prev").click(function() {
      $(".about-carousel-item").trigger("owl.prev");
    });

  }
}
