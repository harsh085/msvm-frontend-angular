import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var AOS: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  message = '';

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  }

  onSubmit() {
    if (!this.name || !this.email || !this.message) {
      this.toastr.warning('Please fill all fields', 'Warning');
      return;
    }
    this.toastr.success('Message sent successfully!', 'Thank you 🎉');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
