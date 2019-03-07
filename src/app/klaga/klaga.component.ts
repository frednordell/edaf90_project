import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-klaga',
  templateUrl: './klaga.component.html',
  styleUrls: ['./klaga.component.scss']
})
export class KlagaComponent implements OnInit {
  contactForm: FormGroup;
  errends = ['Sexuelt ofredad', 'Germany', 'Italy', 'France'];
  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        name: new FormControl(),
        errend: new FormControl(),
        mail: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }
  ngOnInit() {
  }

}
