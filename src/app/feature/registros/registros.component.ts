import { Component, OnInit } from '@angular/core';
import { RegistroVehiculoService } from 'src/app/servicios/registro-vehiculo.service';
import { Router } from '@angular/router';
import { RegistroVehiculo } from '../../modelos/registrovehiculo';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html'
})
export class RegistrosComponent implements OnInit {
    registros: Observable<RegistroVehiculo[]>;

  constructor(private registroVehiculoService: RegistroVehiculoService,
              private router: Router,
              private toast: ToastrService) {
   }

   mostrarRegistros() {
       this.registroVehiculoService.mostrar()
      .subscribe(resultado => {
          console.log(resultado);
          this.registros = resultado as Observable<RegistroVehiculo[]>;
      }, error => {
        this.toast.error(error, 'Error al mostrar registros');
      });
   }

   mostrarTipo(tipoId: number): string {
       return (tipoId === 0) ? 'CARRO' : 'MOTO';
   }

    retirar(placa: string) {
        this.registroVehiculoService.retirar(placa)
    .subscribe(
        resultado => {
          this.toast.success('El valor a pagar es: ' + resultado, 'Cobro:');
        },
        error =>
        this.toast.error(error.error.message, 'Error', {
          timeOut :  3000
        }));
        this.mostrarRegistros();
  }
  ngOnInit() {
      this.mostrarRegistros();
  }

}
