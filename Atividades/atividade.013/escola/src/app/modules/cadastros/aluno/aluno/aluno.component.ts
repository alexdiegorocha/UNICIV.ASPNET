import { AlunoService } from './../../../../core/services/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.sass']
})
export class AlunoComponent implements OnInit {

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
  }

}
