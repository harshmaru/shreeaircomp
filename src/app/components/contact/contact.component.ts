import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ContactService } from "./contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "sac-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit,AfterContentInit {
  @ViewChild("messageDiv") messageDiv: ElementRef;
  contactForm;
  showErrorDiv = false;

  constructor(private fb: FormBuilder, private conSvc: ContactService, private router:Router) {}

  ngOnInit() {
    // this.initialize()
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      subject: ["", Validators.required],
      message: [""]
    });
  }
  ngAfterContentInit() {
    // console.log(this.messageDiv.nativeElement.textContent) 
    this.messageDiv.nativeElement.textContent = "";
  }
  submitForm(e) {
    // console.log(this.contactForm.valid)
    if (this.contactForm.valid) {
      this.showErrorDiv = false;
      // console.log(e);
      this.conSvc.postMail(e).subscribe(data => {
        let result = JSON.parse(data);
        // console.log(JSON.parse(data));
        if (result.status === "success") {
          this.messageDiv.nativeElement.innerHTML = "<h4 style='color : green'>Thank You. Email Sent Successfully. You will be hearing back us in 48 hours.</h4>";
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 2000);
        }
        else{
          this.messageDiv.nativeElement.innerHTML = "<h4 style='color : red'>Some Error Occured. Try Again in Some Time</h4>";
          setTimeout(() => {
            this.contactForm.reset();
          }, 2000);
        }
      });
    } else this.showErrorDiv = true;
  }
}
