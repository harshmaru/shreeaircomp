import { Component, OnInit, AfterViewInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "sac-our-clients",
  templateUrl: "./our-clients.component.html",
  styleUrls: ["./our-clients.component.css"]
})
export class OurClientsComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    $("#our-client-thumb").owlCarousel({
      pagination: false,
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 5,
      itemsDesktop: [1199, 4],
      itemsTablet: [768, 3]
    });

    // Custom Navigation Events
    $(".client-logo-navigation .next").click(function() {
      $("#our-client-thumb").trigger("owl.next");
    });
    $(".client-logo-navigation .prev").click(function() {
      $("#our-client-thumb").trigger("owl.prev");
    });
  }
}
