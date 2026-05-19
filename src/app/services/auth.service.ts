import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = 'http://localhost:5000/api';
  private isBrowser: boolean;
  private SESSION_KEY = 'user';
  private EXPIRY_KEY = 'session_expiry';
  private SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  register(data: { username: string; password: string; role: string }) {
    return this.http.post(`${this.API}/register`, data);
  }

  login(data: { username: string; password: string; role: string }) {
    return this.http.post(`${this.API}/login`, data);
  }

  setSession(user: any) {
    if (!this.isBrowser) return;
    const expiry = Date.now() + this.SESSION_DURATION;
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
    sessionStorage.setItem(this.EXPIRY_KEY, expiry.toString());
  }

  getUser() {
    if (!this.isBrowser) return null;
    if (this.isSessionExpired()) {
      this.logout();
      return null;
    }
    const user = sessionStorage.getItem(this.SESSION_KEY);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    if (!this.isBrowser) return false;
    if (this.isSessionExpired()) {
      this.logout();
      return false;
    }
    return !!sessionStorage.getItem(this.SESSION_KEY);
  }

  private isSessionExpired(): boolean {
    const expiry = sessionStorage.getItem(this.EXPIRY_KEY);
    if (!expiry) return true;
    return Date.now() > parseInt(expiry);
  }

  logout() {
    if (this.isBrowser) {
      sessionStorage.removeItem(this.SESSION_KEY);
      sessionStorage.removeItem(this.EXPIRY_KEY);
    }
  }
}
