import { Injectable } from '@angular/core';
import { Users } from 'src/app/model/model.users';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
   API_URL = environment.baseUrl;
  constructor(private http: HttpClient) { }
  public findById(id: number):Observable<any>{
    return this.http.get<Users[]>(`${this.API_URL}users/`+id);
}
  public getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.API_URL}users`);
  }
  public createUser(users: Users): Observable<any>  {
    return this.http.post(`${this.API_URL}users`, users);
  }
  public updateUser(id: number, value: any):Observable<any>{
    return this.http.put(`${this.API_URL}users/`+id,value);
}
}
