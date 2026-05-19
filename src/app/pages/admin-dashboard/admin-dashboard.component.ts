import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
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
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
      margin-bottom: 40px;
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
      box-shadow: 0 15px 40px rgba(108, 99, 255, 0.15);
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
    .admin-panel-card {
      display: flex;
      align-items: center;
      gap: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      padding: 30px;
      margin-bottom: 30px;
      text-decoration: none;
      color: white;
      transition: all 0.3s;
      box-shadow: 0 10px 30px rgba(108, 99, 255, 0.3);
    }
    .admin-panel-card:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 15px 40px rgba(108, 99, 255, 0.5);
    }
    .admin-panel-icon {
      width: 60px;
      height: 60px;
      background: rgba(255,255,255,0.2);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .admin-panel-card h3 {
      margin: 0;
      font-weight: 700;
      font-size: 1.3rem;
    }
    .admin-panel-card p {
      margin: 5px 0 0;
      opacity: 0.85;
      font-size: 0.9rem;
    }
    .admin-arrow {
      margin-left: auto;
      font-size: 1.5rem;
      opacity: 0.7;
    }
  `]
})
export class AdminDashboardComponent {
  user: any;

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.getUser();
    if (!this.user || this.user.role !== 'admin') {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
