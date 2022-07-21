import { AlunoDisciplina } from './../../../../../core/models/alunodisciplina.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-boletim-form-item]',
  templateUrl: './boletim-form-item.component.html',
  styleUrls: ['./boletim-form-item.component.sass']
})
export class BoletimFormItemComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() model: AlunoDisciplina ={};

  constructor() { }


  ngOnInit(): void {
    console.log(this.model);
    console.log(this.model.Nota1);
  }



}
