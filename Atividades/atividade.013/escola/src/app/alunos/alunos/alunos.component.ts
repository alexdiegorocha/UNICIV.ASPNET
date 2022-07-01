import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Aluno } from '../interface/aluno';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.sass']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [];
  aluno: Aluno;
  form: FormGroup;

  constructor(private alunoService: AlunosService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
      disciplina: [null]
    });

    this.aluno = {
      id: '',
      nome: '',
      disciplina: ''
    }

    this.obterTodosAlunos();
  }

  ngOnInit(): void {
  }

  obterTodosAlunos(){
    this.alunoService.get().subscribe(aluno => this.alunos = aluno);
  }

  obterSomenteUm(alunoId:number){
    this.alunoService.getById(alunoId).subscribe(aluno => this.aluno = aluno);
  }

  adicionarAluno(){
    this.alunoService.post(this.form.value).subscribe(result => console.log(result));
  }

  removerAluno(alunoId:number){
    this.alunoService.delete(alunoId).subscribe();
  }

  pegarId(id:string){
    console.log(id);
  }

}
