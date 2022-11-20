import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class EmpleadosService {
    constructor(private _http: HttpClient) { }

    login(log: Object): Observable<any> {
        var json = JSON.stringify(log);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "Auth/Login";
        var url = environment.urlApiEmpleados + request;

        return this._http.post(url,json, {headers:header});
    }

    loadEmpleados(): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("autho"));
        var request = "api/Empleados";
        var url = environment.urlApiEmpleados + request;

        return this._http.get(url, {headers:header});
    }

    loadEmpleadosPerfiles(): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("autho"));
        var request = "api/Empleados/PerfilEmpleado";
        var url = environment.urlApiEmpleados + request;

        return this._http.get(url, {headers:header});
    }

    loadEmpleadosSubordinados(): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("autho"));
        var request = "api/Empleados/Subordinados";
        var url = environment.urlApiEmpleados + request;

        return this._http.get(url, {headers:header});
    }

}