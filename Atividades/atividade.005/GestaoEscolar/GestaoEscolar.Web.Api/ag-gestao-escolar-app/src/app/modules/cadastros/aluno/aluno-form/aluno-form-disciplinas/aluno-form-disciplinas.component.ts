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
  @Input() model: Aluno = { alunoDisciplinas: [] };
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
    return this.model.alunoDisciplinas ?? [];
  }

  ngOnInit(): void {
  }

  cmdAdicionar() {
    var disciplina = {
      disciplina: this.disciplina
    };
    this.model?.alunoDisciplinas?.push(disciplina);
  }

  cmdRemover(item: Disciplina) {
    var pos
    pos = this.alunoDisciplinas.indexOf(item);
    this.model?.alunoDisciplinas?.splice(pos, 1);
  }

  load() {
    location.reload();
  }
}
