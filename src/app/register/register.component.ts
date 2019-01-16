import { Component, OnInit } from '@angular/core';

import { Formulario } from '../_class/formulario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public model;

  constructor() { }

  onSubmit(){

  }

  ngOnInit() {
    this.model = new Formulario(0, '', 0, 0, '', '', 0, '', 0, '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
