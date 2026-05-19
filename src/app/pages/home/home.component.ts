import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  }
}
