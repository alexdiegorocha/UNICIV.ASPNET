import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
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
  alunoNotas: AlunoDisciplina[] = [];
  mensagem: string = '';

  constructor(private disciplinaService: DisciplinaService, private boletimService: BoletimService) {
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
    this.model = {};
    this.mensagem = '';
    this.load();
  }

  salvarNotas(){
    var result: AlunoDisciplina[]=[];
    this.alunoDisciplinas.forEach((value,i)=>{
      result[i] = value;
      i++;
    })
    this.alunoNotas = result;
    console.log(this.alunoNotas);
   this.boletimService.setNotas(this.alunoNotas).subscribe(
    () => {
      this.mensagem = 'Salvo com sucesso!';
    },
    (err) => {
      this.mensagem = 'Erro ao salvar!';
    }
   );
  }

  load() {
    location.reload();
  }

  apagarMensagem() {
    this.mensagem = '';
    this.load();
  }

}
