import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  public empleado!: Empleado;

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.loadEmpleadosPerfiles().subscribe(response => {
      this.empleado = response;
      console.log(response);
    });
  }
}
