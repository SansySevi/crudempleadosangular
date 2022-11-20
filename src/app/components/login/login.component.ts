import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(private _service: EmpleadosService, private _router: Router) { }

  ngOnInit(): void {
  }

  log() {
    var user = this.cajaUsuario.nativeElement.value;
    var password = this.cajaPassword.nativeElement.value;

    var login = {
      userName: user,
      password: password,
    }

    this._service.login(login).subscribe(response => {
      var tokken = response.response;
      localStorage.setItem("autho", tokken);
      this._router.navigate(["/apiempleados"]);
    })

  }

}
