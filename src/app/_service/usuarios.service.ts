import { Injectable } from '@angular/core';

import { Formulario } from '../_class/formulario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        /* 'Authorization': 'my-auth-token' */ /* TOken de acesso */
    }),
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
    userUrl = "https://recrutamento-praxio.azurewebsites.net/Api/swagger/Usuario";

    constructor(
        private http: HttpClient) {
    }
    addUsuario(usuario: Formulario) {
        return this.http.post<Formulario>(this.userUrl, usuario, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}
