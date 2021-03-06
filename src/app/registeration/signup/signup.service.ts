import { User } from './../signin/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {throwError} from 'rxjs';
import { error } from '@angular/compiler/src/util';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;


}

@Injectable({providedIn: 'root'})
export class AuthService
{
  logout() {
    throw new Error("Method not implemented.");
  }

  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  signup(email: string , password: string)
  {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDdxxaOwZABIviQuBuqsyhLoucRGZl5oM',
      {
        email ,
        password ,
        returnSecureToken: true
      }
    ).pipe(catchError(error => {
      let errorMessage = 'An unknown error occurred!';
      if (!error.error || !error.error.error) {
        return throwError(errorMessage);
      }
      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'This password is not correct.';
          break;
      }
      return throwError(errorMessage);
    }), tap( error => {

      this.handleAuthentication(error.email, error.localId , error.idToken , +error.expiresIn)
    }));

  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    // this.autoLogout(expiresIn * 1000);
    // localStorage.setItem('userData', JSON.stringify(user));

  }
}
