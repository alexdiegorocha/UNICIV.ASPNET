import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/core/models/aluno.model';
import { AlunoService } from 'src/app/core/services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.sass'],
})
export class AlunoListComponent implements OnInit {
  model: Aluno ={};
  listaAluno: Observable<Aluno[]>;
  constructor(private alunoService: AlunoService, private router: Router) {
    this.listaAluno = this.alunoService.get();
   }

  ngOnInit(): void {
  }

  cmdRemover(item: Aluno) {
    var id: number;
    id = Number(item.id);
    this.alunoService.delete(id);
    this.load();
  }

  cmdEditar(item: Aluno){
    var id: number;
    id = Number(item.id);
    this.router.navigateByUrl('cadastros/aluno/'+id+'/editar');
  }

  load() {
    location.reload();
  }
}
