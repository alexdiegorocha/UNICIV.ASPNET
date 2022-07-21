import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/core/models/disciplina.model';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.sass']
})
export class DisciplinaListComponent implements OnInit {
  listaDisciplina: Observable<Disciplina[]>;
  constructor(private disciplinaService: DisciplinaService) {
    this.listaDisciplina = this.disciplinaService.get();
   }

  ngOnInit(): void {
  }

}
