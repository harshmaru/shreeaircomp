import { Component, OnInit } from "@angular/core";
declare var $ : any;

@Component({
  selector: "sac-clients-testimony",
  templateUrl: "./clients-testimony.component.html",
  styleUrls: ["./clients-testimony.component.css"]
})
export class ClientsTestimonyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $("#action-testimonial").owlCarousel({
      pagination: true,
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 1,
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [979, 1]
    });

    // Custom Navigation Events
    $(".call-to-action .next").click(function() {
      $("#action-testimonial").trigger("owl.next");
    });
    $(".call-to-action .prev").click(function() {
      $("#action-testimonial").trigger("owl.prev");
    });
  }
}
