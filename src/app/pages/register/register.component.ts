import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styles: [`
    .role-tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 25px;
    }
    .role-tabs button {
      flex: 1;
      padding: 12px 8px;
      border: 2px solid #eee;
      border-radius: 12px;
      background: white;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .role-tabs button.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
      transform: translateY(-3px);
      box-shadow: 0 5px 20px rgba(108, 99, 255, 0.3);
    }
    .role-tabs button i {
      display: block;
      font-size: 1.3rem;
      margin-bottom: 5px;
    }
  `]
})
export class RegisterComponent {
  username = '';
  password = '';
  selectedRole: 'admin' | 'teacher' | 'student' = 'student';
  loading = false;

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onRegister() {
    if (!this.username || !this.password) {
      this.toastr.warning('Please fill all fields', 'Warning');
      return;
    }

    if (this.password.length < 6) {
      this.toastr.warning('Password must be at least 6 characters', 'Warning');
      return;
    }

    this.loading = true;
    this.auth.register({ username: this.username, password: this.password, role: this.selectedRole }).subscribe({
      next: (res: any) => {
        this.toastr.success(res.message, 'Success 🎉');
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.toastr.error(err.error?.message || 'Registration failed', 'Error');
        this.loading = false;
      }
    });
  }
}
