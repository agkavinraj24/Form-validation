import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  exform: FormGroup;
showAge=false;
  ngOnInit() {
  this.exform = new FormGroup({
    'name' : new FormControl(null, Validators.required),
    'gender':  new FormControl(null,Validators.required),
    'country' : new FormControl(null, Validators.required),
    'city' : new FormControl(null, Validators.required),    
    'age' : new FormControl(null, Validators.required),
  });
  }
  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get name() {
    return this.exform.get('name');
  }
  get country() {
    console.log("country",this.exform.get('country').value)
    if(this.exform.get('country').value =='USA' || this.exform.get('country').value =='India'|| this.exform.get('country').value =='Canada'){
      this.showAge = true;
    }
    return this.exform.get('country');
  }
  get city() {
    return this.exform.get('city');
  }
  get age() {
    return this.exform.get('age');
  }
  get gender() {
    return this.exform.get('gender');
  }
}