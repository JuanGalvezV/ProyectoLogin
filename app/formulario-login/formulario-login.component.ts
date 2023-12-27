import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DetalleLoginService } from '../detalle-login.service';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  formLogin = new FormGroup({
    'user': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  get user(){
    return this.formLogin.get('user') as FormControl;
  }

  get password(){
    return this.formLogin.get('password') as FormControl;
  }

  constructor(public DetalleLoginService: DetalleLoginService){}

  checkUser(){
    this.DetalleLoginService.check(true)
  }
}
