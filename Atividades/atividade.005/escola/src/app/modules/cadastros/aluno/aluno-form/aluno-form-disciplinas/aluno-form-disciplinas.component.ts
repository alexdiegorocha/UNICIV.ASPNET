import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Aluno } from './../../../../../core/models/aluno.model';
import { AlunoDisciplina } from './../../../../../core/models/alunodisciplina.model';
import { Disciplina } from './../../../../../core/models/disciplina.model';
import { DisciplinaService } from './../../../../../core/services/disciplina.service';

@Component({
  selector: 'app-aluno-form-disciplinas',
  templateUrl: './aluno-form-disciplinas.component.html',
  styleUrls: ['./aluno-form-disciplinas.component.sass'],
})
export class AlunoFormDisciplinasComponent implements OnInit {
  @Input() model: Aluno = { AlunoDisciplinas: [] };
  @Output() modelEvent = new EventEmitter<Aluno>();
  @Input() disabled: boolean = false;

  listaDisciplina: Observable<Disciplina[]>;
  disciplina: Disciplina = {};

  constructor(
    private location: Location,
    private disciplinaService: DisciplinaService
  ) {
    this.listaDisciplina = this.disciplinaService.get();
  }

  get alunoDisciplinas(): AlunoDisciplina[] {
    return this.model.AlunoDisciplinas ?? [];
  }

  ngOnInit(): void {
  }

  cmdAdicionar() {
    var alunoDisciplina = {
      Disciplina: this.disciplina
    };
    this.model?.AlunoDisciplinas?.push(alunoDisciplina);
  }

  cmdRemover(item: Disciplina) {
    var pos
    pos = this.alunoDisciplinas.indexOf(item);
    this.model?.AlunoDisciplinas?.splice(pos, 1);
  }

  load() {
    location.reload();
  }
}
