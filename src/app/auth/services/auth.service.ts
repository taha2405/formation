import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from 'src/app/model/model.users';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.baseUrl;

  users = new Users();
  private isLoginSubject = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  public signIn(email: string, password: string): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.API_URL}users?email=${email}&password=${password}`);
  }

  public register(users: Users): Observable<any> {
    return this.http.post(`${this.API_URL}users`, users);
  }

  public changeLogged(status:boolean):void
  {
    this.isLoginSubject.next(status);
  }
  public isLogged(): Observable<boolean> {
    return this.isLoginSubject as Observable<boolean>;
  }
}
