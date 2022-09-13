import { TurmaService } from './../../../../../core/services/turma.service.service';
import { Observable } from 'rxjs';
import { Turma } from './../../../../../core/models/turma.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Aluno } from './../../../../../core/models/aluno.model';

@Component({
  selector: 'app-aluno-form-principal',
  templateUrl: './aluno-form-principal.component.html',
  styleUrls: ['./aluno-form-principal.component.sass']
})
export class AlunoFormPrincipalComponent implements OnInit {
  @Input() model: Aluno = { alunoDisciplinas: [], turma:{} };
  @Output() modelEvent = new EventEmitter<Aluno>();
  @Input() disabled: boolean = false;
  incluir: boolean = false;
  editar: boolean = false;
  habilitarEdicao: boolean = false
  listaTurma: Observable<Turma[]>;

  constructor(private turmaService: TurmaService) {
    this.listaTurma = this.turmaService.get();
   }

  ngOnInit(): void {
    this.disabled = false;
    this.model = this.model ?? {alunoDisciplinas: [], turma:{}};
  }
}
