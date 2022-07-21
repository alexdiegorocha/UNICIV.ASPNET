import { AlunoDisciplina } from './../../../../../core/models/alunodisciplina.model';
import { Disciplina } from './../../../../../core/models/disciplina.model';
import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/core/models/aluno.model';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';

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
    this.model ??= { AlunoDisciplinas: [] };
  }

  cmdAdicionar() {
    var alunoDisciplina = {
      Aluno: this.model,
      Disciplina: this.disciplina,
    };
    //classe AlunoDisciplina
    this.model?.AlunoDisciplinas?.push(alunoDisciplina);
    console.log(this.model?.AlunoDisciplinas);
  }

  cmdCancelar() {
    this.location.back();
  }

  load() {
    location.reload();
  }
}
