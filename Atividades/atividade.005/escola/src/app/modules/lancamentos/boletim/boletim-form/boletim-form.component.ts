import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoService } from 'src/app/core/services/aluno.service';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';

import { AlunoDisciplina } from './../../../../core/models/alunodisciplina.model';
import { Disciplina } from './../../../../core/models/disciplina.model';
import { BoletimService } from './../../../../core/services/boletim.service';

@Component({
  selector: 'app-boletim-form',
  templateUrl: './boletim-form.component.html',
  styleUrls: ['./boletim-form.component.sass']
})
export class BoletimFormComponent implements OnInit {
  @Input() model: AlunoDisciplina = { };
  @Output() modelEvent = new EventEmitter<AlunoDisciplina>();
  listaDisciplina: Observable<Disciplina[]>;
  alunoDisciplinas: AlunoDisciplina[] = [];
  disabled: boolean = false;
  disabledLancarNotas: boolean = false;
  mensagem: string = '';

  constructor(private disciplinaService: DisciplinaService, private boletimService: BoletimService, private alunoService: AlunoService) {
    this.listaDisciplina = this.disciplinaService.get();
   }

   getAlunoDisciplinas(){
    var disciplinaId = Number(this.model.disciplina?.id);
    var result = this.boletimService.getByDisciplina(disciplinaId);
    return result;
  }

  retornarAlunosPorDisciplina(){
    this.getAlunoDisciplinas().subscribe(value => {
      this.alunoDisciplinas = value;
    });
  }

  ngOnInit(): void {
    this.model = this.model ?? {};
  }

  cmdNovo(){

  }

  salvarNotas(){
   this.boletimService.post(this.model).subscribe((value: AlunoDisciplina) => {
   });
  }

  load() {
    location.reload();
  }

  apagarMensagem() {
    this.mensagem = '';
    this.load();
  }

}
