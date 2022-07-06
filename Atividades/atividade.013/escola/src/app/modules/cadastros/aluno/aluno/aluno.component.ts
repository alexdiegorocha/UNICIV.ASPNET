import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(
    private alunoService: AlunoService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
      disciplina: [null],
    });

    this.alunos$ = this.alunoService.get();
  }

  ngOnInit(): void {}

  cmdSalvar() {
    this.alunoService.post(this.form.value).subscribe((value: Aluno) => {
      console.log(value);
    });
  }

  cmdCancelar() {
    this.location.back();
  }
}
