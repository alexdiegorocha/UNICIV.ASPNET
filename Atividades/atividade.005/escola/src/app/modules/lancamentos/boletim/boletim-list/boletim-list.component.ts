import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoDisciplina } from 'src/app/core/models/alunodisciplina.model';

import { AlunoDisciplinaService } from './../../../../core/services/alunodisciplina.service';

@Component({
  selector: 'app-boletim-list',
  templateUrl: './boletim-list.component.html',
  styleUrls: ['./boletim-list.component.sass']
})
export class BoletimListComponent implements OnInit {
  listaNotas: Observable<AlunoDisciplina[]>;

  constructor(private alunoDisciplinaService: AlunoDisciplinaService) {
    this.listaNotas = this.alunoDisciplinaService.get();
  }

  ngOnInit(): void {
  }

}
