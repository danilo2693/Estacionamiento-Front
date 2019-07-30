import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { HttpClientModule } from '@angular/common/http';
import { RegistrosModule } from './feature/registros/registros.module';
import { RegistrosComponent } from './feature/registros/registros.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'registros', component: RegistrosComponent},
  {path: 'nuevoRegistro', loadChildren: './feature/nuevo-registro/nuevo-registro.module#NuevoRegistroModule'},
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        RegistrosModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
