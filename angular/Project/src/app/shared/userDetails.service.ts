import { UserResponse } from './userResponse.model';

export class UserDetails{
    expiresIn: Date;
    email: string;
    localId: string;
    idToken: string;
    

    setUser(email: string, UId: string, token: string, expires: number){
        this.email= email;
        this.idToken = token;
        this.localId = UId;
        this.expiresIn = new Date(new Date().getTime()+ expires * 1000);
    }

}