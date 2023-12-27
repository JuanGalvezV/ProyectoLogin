import { Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { DetalleLoginComponent } from './detalle-login/detalle-login.component';

export const routes: Routes = [
   {
    path: '', 
    component: FormularioLoginComponent
    },
   {
    path: 'detalle', 
   component: DetalleLoginComponent
    }
];
