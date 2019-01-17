import { Component, OnInit } from '@angular/core';

import { Formulario } from '../_class/formulario';
import { AuthService } from "./auth.service";
import {Usuario} from "../_class/usuario";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public model;

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.model = new Formulario('', 0, 0, '', '', 0, '', 0, '');
  }

  login($event) {
      //console.log(this.usuario);
      $event.preventDefault();

      this.authService.login(this.usuario);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
