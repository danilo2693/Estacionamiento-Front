import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  template:  `
{{registro?.vehiculo.placa| uppercase}}
{{registro?.vehiculo.tipo}}
{{registro?.entrada | date:'medium'}}
' `
})
export class RegistroComponent implements OnInit {

     @Input() registro;
  constructor(private route: ActivatedRoute) {
      this.route.params
      .subscribe(x => console.log(x));
   }

  ngOnInit() {
  }

}
