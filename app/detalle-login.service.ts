import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalleLoginService {

  constructor() { }

  comunicate: boolean = true;

  check(comunicate: boolean){
    this.comunicate = comunicate;
  }
  
}
