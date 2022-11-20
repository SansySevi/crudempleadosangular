import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public empleados!: Array<Empleado>

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.loadEmpleados().subscribe(response => {
      this.empleados = response;
      console.log(response);
    });
  }

}
