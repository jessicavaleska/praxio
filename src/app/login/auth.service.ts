import {Injectable} from '@angular/core';

import {Router} from '@angular/router';
import {Usuario} from "../_class/usuario";
import {UsuariosService} from '../_service/usuarios.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private usuarioAuth: boolean = false;

    constructor(private router: Router, public usuariosService: UsuariosService) {
    }

    login(usuario: Usuario) {
        this.usuariosService.logarUsuario(usuario).subscribe(this.usuarioRedirect /* Se der Certo */,
            error => console.log(error) /* Erro */,
            () => console.log('WebService Conectado') /* Server Ok */);

        // Descomentar para teste
        /*if (usuario.email === 'teste@teste.com' && usuario.senha === '123456') {
            this.usuarioAuth = true;

            this.router.navigate(['/home']);
        } else {
            this.usuarioAuth = false;
        }*/
    }

    usuarioRedirect = (data = new Object) => {
        this.usuarioAuth = true;

        //verifica se autenticação obteve sucesso!
        if(data['success']) {
            this.router.navigate(['/home']);
        } else {
            this.router.navigate(['**']);
        }

        this.router.navigate(['/home']);
    }

    usuarioIsAuth() {
        return this.usuarioAuth;
    }

}
