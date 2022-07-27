import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/core/models/aluno.model';
import { AlunoService } from 'src/app/core/services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.sass'],
})
export class AlunoListComponent implements OnInit {
  listaAluno: Observable<Aluno[]>;

  constructor(private alunoService: AlunoService) {
    this.listaAluno = this.alunoService.get();
  }

  ngOnInit(): void {}
}
