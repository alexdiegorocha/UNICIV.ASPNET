import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TurmaService } from './../../../../core/services/turma.service.service';
import { Turma } from './../../../../core/models/turma.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.sass']
})
export class TurmaListComponent implements OnInit {
  model: Turma ={};
  listaTurma: Observable<Turma[]>;
  constructor(private turmaService: TurmaService, private router: Router) {
    this.listaTurma = this.turmaService.get();
   }

  ngOnInit(): void {
  }

  cmdRemover(item: Turma) {
    var id: number;
    id = Number(item.id);
    this.turmaService.delete(id).subscribe(() => {});
    this.load();
  }

  cmdEditar(item: Turma){
    var id: number;
    id = Number(item.id);
    this.router.navigateByUrl('cadastros/turma/'+id+'/editar');
  }

  load() {
    location.reload();
  }
}
