import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';

import { AlunoDisciplina } from './../../../../core/models/alunodisciplina.model';
import { Disciplina } from './../../../../core/models/disciplina.model';
import { BoletimService } from './../../../../core/services/boletim.service';

@Component({
  selector: 'app-boletim-list',
  templateUrl: './boletim-list.component.html',
  styleUrls: ['./boletim-list.component.sass']
})
export class BoletimListComponent implements OnInit {
  @Input() model: AlunoDisciplina = { };
  @Output() modelEvent = new EventEmitter<AlunoDisciplina>();
  listaDisciplina: Observable<Disciplina[]>;
  alunoDisciplinas: AlunoDisciplina[] = [];

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


}
