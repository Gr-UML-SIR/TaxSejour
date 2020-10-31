import { Component, OnInit } from '@angular/core';
import { SejourService } from '../sejour.service';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.scss']
})
export class LocaleComponent implements OnInit {

  constructor(public service: SejourService,) { }

  ngOnInit(): void {
  }

  search() {
    this.service.findLocale();
  }

  getImpayer(i) {
    console.log(this.service.listLocale[i]);
  }
}
