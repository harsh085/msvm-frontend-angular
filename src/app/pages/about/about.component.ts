import { Component, OnInit } from '@angular/core';

declare var AOS: any;

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  }
}
