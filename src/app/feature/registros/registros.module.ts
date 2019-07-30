import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from '../registro/registro.component';
import { RegistrosComponent } from './registros.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RegistroComponent,
    RegistrosComponent
  ],
  exports: [
    RegistrosComponent,
    CommonModule
  ]
})
export class RegistrosModule {

 }
