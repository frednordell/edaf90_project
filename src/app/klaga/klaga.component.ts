import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-klaga',
  templateUrl: './klaga.component.html',
  styleUrls: ['./klaga.component.scss']
})
export class KlagaComponent implements OnInit {
  signupForm: FormGroup;
  names: string = "";
  errends: string = "";
  mails: string = "";
  constructor(private frmbuilder: FormBuilder) {
    this.signupForm = frmbuilder.group({
      name: new FormControl(),
      errend: new FormControl(),
      mail: new FormControl()
    });
  }
  ngOnInit() {
  }
  PostData(signupForm: NgForm) {
    console.log(signupForm.controls);
  }

}
