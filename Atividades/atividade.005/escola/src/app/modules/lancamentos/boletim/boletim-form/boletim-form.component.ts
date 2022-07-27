import { BoletimService } from './../../../../core/services/boletim.service';
import { Disciplina } from './../../../../core/models/disciplina.model';
import { AlunoDisciplina } from './../../../../core/models/alunodisciplina.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';
import { Aluno } from 'src/app/core/models/aluno.model';

@Component({
  selector: 'app-boletim-form',
  templateUrl: './boletim-form.component.html',
  styleUrls: ['./boletim-form.component.sass']
})
export class BoletimFormComponent implements OnInit {
  @Input() model: Disciplina = { AlunoDisciplinas: [] };
  @Output() modelEvent = new EventEmitter<Disciplina>();
  listaDisciplina: Observable<Disciplina[]>;
  disabled: boolean = false;
  disabledLancarNotas: boolean = false;

  constructor(private disciplinaService: DisciplinaService, private boletimService: BoletimService) {
    this.listaDisciplina = this.disciplinaService.get();
   }

   get pegarAlunoDisciplinas():AlunoDisciplina[]{
    return this.model.AlunoDisciplinas ?? [];
  }

  ngOnInit(): void {
    this.model = this.model ?? {};
  }

  salvarNotas(){
    //this.boletimService.post(this.model).subscribe((value: AlunoDisciplina) => {
    //});
   this.boletimService.post(this.model).subscribe((value: AlunoDisciplina) => {
   });
  }

  teste(item: AlunoDisciplina){
    console.log(item);
  }

}
