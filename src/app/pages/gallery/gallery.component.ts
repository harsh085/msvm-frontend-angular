import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  images = [
    '/assets/Annual-Function-2-K20.jpg',
    '/assets/Guests-MSVM-Annual-Function-2-K20.jpg',
    '/assets/WhatsApp Image 2026-05-13 at 3.35.00 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 3.45.03 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 3.46.58 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 3.52.21 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 3.59.15 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 4.06.36 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 4.07.16 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 4.08.20 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 4.08.49 PM.jpeg',
    '/assets/WhatsApp Image 2026-05-13 at 4.09.39 PM.jpeg',
  ];

  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  }
}
