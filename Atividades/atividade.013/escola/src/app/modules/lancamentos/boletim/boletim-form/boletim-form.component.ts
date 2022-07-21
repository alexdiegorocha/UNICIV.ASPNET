import { AlunoDisciplina } from './../../../../core/models/alunodisciplina.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from 'src/app/core/models/disciplina.model';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';
import { Aluno } from 'src/app/core/models/aluno.model';

@Component({
  selector: 'app-boletim-form',
  templateUrl: './boletim-form.component.html',
  styleUrls: ['./boletim-form.component.sass']
})
export class BoletimFormComponent implements OnInit {
  listaDisciplina: Observable<Disciplina[]>;
  disabled: boolean = false;
  disabledLancarNotas: boolean = false;
  disciplina: Disciplina = {};
  aluno: Aluno = {};

  constructor(private disciplinaService: DisciplinaService) {
    this.listaDisciplina = this.disciplinaService.get();
   }

   get alunoDisciplinas():AlunoDisciplina[]{
    return this.disciplina.AlunoDisciplinas ?? [];
  }

  ngOnInit(): void {
  }

  habilitaLancarNotas(){
    this.disabledLancarNotas = !this.disabledLancarNotas
  }

}
