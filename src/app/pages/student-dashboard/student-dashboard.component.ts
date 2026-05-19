import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styles: [`
    .dashboard {
      min-height: 100vh;
      padding: 100px 20px 40px;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }
    .dashboard-header h1 {
      font-weight: 800;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .btn-logout {
      padding: 10px 25px;
      background: linear-gradient(135deg, #f5576c, #ff6b6b);
      color: white;
      border: none;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    .btn-logout:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 20px rgba(255, 107, 107, 0.4);
    }
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }
    .stat-box {
      background: white;
      border-radius: 20px;
      padding: 30px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      transition: all 0.3s;
    }
    .stat-box:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(79, 172, 254, 0.15);
    }
    .stat-box i {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }
    .stat-box h3 {
      font-size: 2rem;
      font-weight: 800;
      color: #333;
    }
    .stat-box p {
      color: #666;
      font-weight: 500;
    }
  `]
})
export class StudentDashboardComponent {
  user: any;

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.getUser();
    if (!this.user || this.user.role !== 'student') {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
