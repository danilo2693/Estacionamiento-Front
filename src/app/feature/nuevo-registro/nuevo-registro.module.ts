import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoRegistroComponent } from './nuevo-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: NuevoRegistroComponent},
];

@NgModule({
  declarations: [NuevoRegistroComponent],
  imports: [
      CommonModule,
    FormsModule,
     ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [NuevoRegistroComponent]
})
export class NuevoRegistroModule { }
