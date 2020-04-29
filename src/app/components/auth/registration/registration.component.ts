import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    price: [''],
    delivery: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
