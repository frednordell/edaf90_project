import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lat: number = 55.7111292;
  lng: number = 13.2106874;
  zoom: number = 12;

  constructor() { }

  ngOnInit() {
  }

}
