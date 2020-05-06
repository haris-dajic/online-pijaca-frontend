import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { RegistrationService } from 'src/app/services/auth/registration.service';
import { UserRegistration } from 'src/app/models/userRegistration';
import { LocationService } from 'src/app/services/location/location.service';
import { debounceTime } from 'rxjs/operators';
import { MapboxOutput } from 'src/app/models/location';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //Add more validations
  registrationForm = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    gender: ['male', Validators.required],
    location: ['', Validators.required],
    phone: ['', Validators.required]
  });

  locations: any[];
  user: UserRegistration;
  keyword = 'text';

  constructor(private fb: FormBuilder, private alertify: AlertifyService,
    private registrationService: RegistrationService, private locationService: LocationService) {
  }

  ngOnInit() {
    this.registrationForm.get('location').valueChanges.pipe(debounceTime(400)).
      subscribe(term => {
        this.getLocations(term);
      });
  }

  getLocations(address) {
    if (address !== '')
      this.locationService.search(address).subscribe(data => {
        this.locations = data.features;
      });
  }

  selectLocation(event) {
    console.log('Select event', event);
    this.registrationForm.patchValue({
      location: event.text
    });
  }

  selectGender(gender) {
    this.registrationForm.patchValue({
      gender: gender.target.value
    });
  }

  register() {
    if (!this.registrationForm.valid) {
      this.alertify.error('Molimo unesite sve podatke!');
      return;
    }
    else {
      this.user = Object.assign({}, this.registrationForm.value);
      console.log('User', this.user);
      this.registrationService.register(this.user).subscribe(() => this.alertify.success('Uspješno ste prijavljeni.'),
        () => this.alertify.error('Greška prilikom prijavljivanja.'));
    }
  }

  onChangeSearch(event) {
    console.log('On change search', event);
  }

  onFocused(event) {
    console.log('OnFocused', event);
  }
}
