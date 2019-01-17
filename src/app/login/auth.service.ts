import {Injectable} from '@angular/core';

import {Router} from '@angular/router';
import {Usuario} from "../_class/usuario";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private usuarioAuth: boolean = false;

    constructor(private router: Router) {
    }

    login(usuario: Usuario) {
        if (usuario.email === 'teste@teste.com' && usuario.senha === '123456') {
            this.usuarioAuth = true;

            this.router.navigate(['/home']);
        } else {
            this.usuarioAuth = false;
        }
    }

    usuarioIsAuth() {
        return this.usuarioAuth;
    }

}
