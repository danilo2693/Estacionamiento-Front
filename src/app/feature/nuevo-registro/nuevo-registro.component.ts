import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegistroVehiculoService } from 'src/app/servicios/registro-vehiculo.service';
import { RegistroVehiculo } from 'src/app/modelos/registrovehiculo';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css']
})
export class NuevoRegistroComponent implements OnInit {
    registroForm: any;
    placaControl: FormControl;
    tipoControl: FormControl;
    cilindrajeControl: FormControl;
    registro: RegistroVehiculo;

  condicion: boolean;

  constructor(private fb: FormBuilder,
              private registroVehiculoService: RegistroVehiculoService,
              private toast: ToastrService) {
      this.placaControl =
      new FormControl('', Validators.compose([Validators.required]));
      this.tipoControl =
      new FormControl('', Validators.compose([Validators.required]));
      this.cilindrajeControl =
      new FormControl('', Validators.compose([]));

      this.registroForm = this.fb.group({
      placa: this.placaControl,
      tipo: this.tipoControl,
      cilindraje: this.cilindrajeControl,
      });
  }

  ngOnInit() {
      this.registro = new RegistroVehiculo();
  }

  onSubmit() {
    this.registro.entradaComando = new Date();
    this.registro.placaComando = this.registroForm.value.placa;
    this.registro.tipoIdComando = this.registroForm.value.tipo;
    this.registro.cilindrajeComando = this.registroForm.value.cilindraje;

    this.registroVehiculoService.crearRegistroVehiculo(this.registro)
      .subscribe(
          (resultado) => this.showSuccessWithTimeout('Se agrego el registro existosamente', 'Exito', 3000),
           (mistake) => this.showErrorWithTimeout(mistake.error.message, 'Error', 3000));
    this.registroForm.reset();
  }

  showErrorWithTimeout(message: string, title: string, timespan: number) {
      this.toast.error(message, title, {
          timeOut :  timespan
        })
    }
    showSuccessWithTimeout(message: string, title: string, timespan: number) {
      this.toast.success(message, title, {
          timeOut :  timespan
        })
    }
}
