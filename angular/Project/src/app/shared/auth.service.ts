import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from './loginData.model';
import { tap } from 'rxjs/operators'
import { UserResponse } from './userResponse.model';
import { UserDetails } from './userDetails.service';

@Injectable()

export class AuthService{
    constructor(private http: HttpClient, private userDetails: UserDetails){}

    login(userDetails: LoginData){
        return this.http.post<UserResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCW_zSeClYUglwU_B2qBP6Xw2_fe65-16M", 
        {...userDetails, returnSecureToken: true}).pipe(tap(
            (response)=>{
               this.userDetails.setUser(response.email, response.localId, response.idToken, response.expiresIn);

            }   
        )
        );
    }

    signup(userDetails: LoginData){
        return this.http.post<UserResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCW_zSeClYUglwU_B2qBP6Xw2_fe65-16M", 
        {...userDetails, returnSecureToken: true}).pipe(tap(
            (response)=>{
               this.userDetails.setUser(response.email, response.localId, response.idToken, response.expiresIn);
            }
        )
        );
      }
}