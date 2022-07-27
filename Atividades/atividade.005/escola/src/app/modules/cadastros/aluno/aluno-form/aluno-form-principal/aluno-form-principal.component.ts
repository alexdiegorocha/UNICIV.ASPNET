import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Aluno } from './../../../../../core/models/aluno.model';

@Component({
  selector: 'app-aluno-form-principal',
  templateUrl: './aluno-form-principal.component.html',
  styleUrls: ['./aluno-form-principal.component.sass']
})
export class AlunoFormPrincipalComponent implements OnInit {
  @Input() model: Aluno = { AlunoDisciplinas: [] };
  @Output() modelEvent = new EventEmitter<Aluno>();

  incluir: boolean = false;
  editar: boolean = false;
  habilitarEdicao: boolean = false
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.disabled = false;
    this.model = this.model ?? {};
  }
}
