import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-klaga',
  templateUrl: './klaga.component.html',
  styleUrls: ['./klaga.component.scss']
})
export class KlagaComponent implements OnInit {
  form: FormGroup;

  constructor(private frmbuilder: FormBuilder) {
    this.form = frmbuilder.group({
      name: "",
      issue: "",
      email: ""
    });

    this.form.valueChanges.subscribe(changes => {
      this.form.get("email").setValidators(Validators.email)
    })
  }

  ngOnInit() {
  }

  postData(form: NgForm) {
    console.log(form.controls);
  }

}
