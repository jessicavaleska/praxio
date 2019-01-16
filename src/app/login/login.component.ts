import { Component, OnInit } from '@angular/core';

import { Formulario } from '../_class/formulario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public model;

  constructor() { }

  ngOnInit() {
    this.model = new Formulario(0, '', 0, 0, '', '', 0, '', 0, '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
