import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { addHours, parseISO } from 'date-fns'; // Importa funciones de date-fns
import { of, Observable } from 'rxjs';
import { responseToken } from '../models/moduloModel';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage) {
    }

    login(email: string, password: string): Observable<boolean> {
        const data = { correo: email, contraseña: password };
    
        return this.http.post<responseToken>('http://localhost/Sinapptic-backend/auth/login', data).pipe(
            map(response => {
                const userData = {
                    token: response.token,
                    isAdmin: true, 
                    email: response.data.Correo,
                    id: response.data.Id,
                    alias: response.data.Correo.split('@')[0],
                    expiration: addHours(new Date(), 1), // Reemplazado moment
                    fullName: `${response.data.Nombre} ${response.data.Apellido}`
                };
                localStorage.setItem('currentUser', JSON.stringify(userData));
                return true;
            })
        );
    }
    

    logout(): void {
        this.localStorage.removeItem('currentUser');
    }

    getCurrentUser(): any {
        const currentUserString = localStorage.getItem('currentUser');
        if (currentUserString) {
            const currentUser = JSON.parse(currentUserString);
            return {
                token: currentUser.token,
                isAdmin: currentUser.isAdmin,
                email: currentUser.email,
                id: currentUser.id,
                alias: currentUser.alias,
                expiration: parseISO(currentUser.expiration), // Asegúrate de almacenar la fecha correctamente
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
