import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrls: ['./subordinados.component.css']
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.loadEmpleadosSubordinados().subscribe(response => {
      this.empleados = response;
      console.log(response);
    });
  }
}
