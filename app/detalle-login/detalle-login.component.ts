import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleLoginService } from '../detalle-login.service';

@Component({
  selector: 'app-detalle-login',
  standalone: true,
  imports: [],
  templateUrl: './detalle-login.component.html',
  styleUrl: './detalle-login.component.css'
})
export class DetalleLoginComponent {
  constructor(public detalleLoginService: DetalleLoginService) {}

}
