import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isLoogedin() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ username, password }: any): Observable<any> {

    if (username == 'mihir' && password == '12345') {
      this.setToken('fuSmW3v53GZwMvLiCREwMvLiCRE');
      return of({ name: 'Tarequl Islam', username: 'mihir' });
    }
    return throwError(new Error('Faild to login'));
  }




}


