import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  
  registados: Registro[] = [];

  constructor() { }

  guardarRegistro(format: string, text: string  ) {

    const nuevoRegitro = new Registro(format, text);
    this.registados.unshift( nuevoRegitro );

  }

   
}
