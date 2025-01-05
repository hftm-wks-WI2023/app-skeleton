import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly user$ = new BehaviorSubject<any>(null)

  constructor(
    private http: HttpClient
  ) {
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>('/api/auth/login/', {username, password}).pipe(
      tap(user => this.user$.next(user))
    )
  }

  me(): Observable<any> {
    return this.http.get<any>('/api/staff/restaurant-users/me/').pipe(
      tap(user => this.user$.next(user))
    )
  }

  logout(): Observable<void> {
    const headers = new HttpHeaders().append('X-CSRFToken', 'dsadsada')
    return this.http.post<void>('/api/auth/logout/', {}).pipe(
      tap(() => this.user$.next(null))
    )
  }
}
