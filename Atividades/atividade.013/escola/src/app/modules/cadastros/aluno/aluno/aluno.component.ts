import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Disciplina } from 'src/app/core/models/disciplina.model';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';

import { Aluno } from './../../../../core/models/aluno.model';
import { AlunoService } from './../../../../core/services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.sass'],
})
export class AlunoComponent implements OnInit {
  form: FormGroup;
  alunos$: Observable<Aluno[]>;
  listaDisciplina$: Observable<Disciplina[]>;

  constructor(
    private alunoService: AlunoService,
    private disciplinaService: DisciplinaService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
      disciplina: [null],
    });

    this.alunos$ = this.alunoService.get();
    this.listaDisciplina$ = this.disciplinaService.get();
  }

  ngOnInit(): void {}

  cmdSalvar() {
    this.alunoService.post(this.form.value).subscribe((value: Aluno) => {
      console.log(value);
    });
    this.load();
  }

  cmdCancelar() {
    this.location.back();
  }

  load(){
    location.reload();
  }

  cmdExcluir(id:number){
    this.alunoService.delete(id).subscribe();
    this.load();
  }
}
