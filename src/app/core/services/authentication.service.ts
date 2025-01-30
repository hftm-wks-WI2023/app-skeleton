import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { ProcessbarService } from '../../shared/services/processbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly user$ = new BehaviorSubject<any>(null)

  constructor(
    private http: HttpClient,
    private processBarService: ProcessbarService,
  ) {
  }

  login(username: string, password: string): Observable<boolean> {
    this.processBarService.isLoading$.next(true)
    return this.http.post<any>('/api/auth/login/', { username, password }).pipe(
      tap(user => this.user$.next(user)),
      tap(() => this.processBarService.isLoading$.next(false))
    )
  }

  me(): Observable<any> {
    this.processBarService.isLoading$.next(true)
    return this.http.get<any>('/api/staff/restaurant-users/me/').pipe(
      tap(user => this.user$.next(user)),
      tap(() => this.processBarService.isLoading$.next(false))

    )
  }

  logout(): Observable<void> {
    this.processBarService.isLoading$.next(true)
    const headers = new HttpHeaders().append('X-CSRFToken', 'dsadsada')
    return this.http.post<void>('/api/auth/logout/', {}).pipe(
      tap(() => this.user$.next(null)),
      tap(() => this.processBarService.isLoading$.next(false))

    )
  }
}
