import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';
import { of, EMPTY, Observable } from 'rxjs';
import { co, dA, em } from '@fullcalendar/core/internal-common';
import { responseToken } from '../models/moduloModel';
import { Token } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage) {
    }

    login(email: string, password: string): Observable<boolean> {
        const data = { correo:email, contraseña: password };
    
        return this.http.post<responseToken>('http://localhost:8080/auth/login', data).pipe(
            delay(2000),
            map(response => {
                const userData = {
                    token: response.token,
                    isAdmin: true, 
                    email: response.data.Correo,
                    id: response.data.Id,
                    alias: response.data.Correo.split('@')[0],
                    expiration: moment().add(1, 'days').toDate(),
                    fullName: `${response.data.Nombre} ${response.data.Apellido}`
                };
                localStorage.setItem('currentUser', JSON.stringify(userData));
                return true;
            })
        );
    }
    

    logout(): void {
        // clear token remove user from local storage to log user out
        this.localStorage.removeItem('currentUser');
    }

    getCurrentUser(): any {
        const currentUserString = localStorage.getItem('currentUser');
        if (currentUserString) {
            const currentUser = JSON.parse(currentUserString);
            return {
                token:currentUser.token,
                isAdmin: currentUser.isAdmin,
                email: currentUser.email,
                id: currentUser.id,
                alias: currentUser.alias,
                expiration: moment(currentUser.expiration),
                fullName: currentUser.fullName
            };
        }
        return null; // O maneja el caso donde no hay usuario almacenado
    }
    

    passwordResetRequest(email: string) {
        return of(true).pipe(delay(1000));
    }

    changePassword(email: string, currentPwd: string, newPwd: string) {
        return of(true).pipe(delay(1000));
    }

    passwordReset(email: string, token: string, password: string, confirmPassword: string): any {
        return of(true).pipe(delay(1000));
    }
}
