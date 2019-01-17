import { Component, OnInit } from '@angular/core';

import { Formulario } from '../_class/formulario';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../_service/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public model;

  constructor(private usuariosService : UsuariosService) { }

    onSubmit($event, form: NgForm){
        $event.preventDefault();

        const novoUsuario: Formulario = {...form.value} as Formulario;
        this.usuariosService.addUsuario(novoUsuario).subscribe(data => console.log(data) /* Se der Certo */,
            error => console.log(error) /* Erro */,
            () => console.log('WebService Conectado') /* Server Ok */);
    }

  ngOnInit() {
    this.model = new Formulario('', 0, 0, '', '', 0, '', 0, '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
