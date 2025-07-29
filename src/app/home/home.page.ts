import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  cursos = [
    {
      nombre: 'I+DEC = Investigación + Desarrollo, Educación y Competencias',
      categoria: 'PLANTILLAS',
      imagen: 'C:\Users\USER\eva\src\assets\images\Captura de pantalla 2025-07-29 122807.png'
    },
    {
      nombre: 'Equidad de Genero',
      categoria: 'PLANTILLAS',
      imagen: 'C:\Users\USER\eva\src\assets\images\Captura de pantalla 2025-07-29 123017.png'
    },
    {
      nombre: 'Aula Plantilla',
      categoria: 'PLANTILLAS',
      imagen: 'C:\Users\USER\eva\src\assets\images\Captura de pantalla 2025-07-29 123030.png'
    },
    {
      nombre: 'TEORÍA DEL DISEÑO',
      categoria: '1ER NIVEL [27-1-1-12-1]',
      imagen: 'src\assets\images\Captura de pantalla 2025-07-29 123041.png'
    },
    {
      nombre: 'RETOQUE DIGITAL Y VECTORES - MATUTINO',
      categoria: '1ER NIVEL [27-1-1-12-1]',
      imagen: 'src\assets\images\Captura de pantalla 2025-07-29 123047.png'
    }
  ];

  constructor() {}

}
