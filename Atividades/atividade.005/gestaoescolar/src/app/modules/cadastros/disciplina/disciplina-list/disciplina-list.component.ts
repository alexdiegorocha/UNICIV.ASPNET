import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from 'src/app/core/models/disciplina.model';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.sass']
})
export class DisciplinaListComponent implements OnInit {
  model: Disciplina ={};
  listaDisciplina: Observable<Disciplina[]>;
  constructor(private disciplinaService: DisciplinaService, private router: Router) {
    this.listaDisciplina = this.disciplinaService.get();
   }

  ngOnInit(): void {
  }

  cmdRemover(item: Disciplina) {
    var id: number;
    id = Number(item.id);
    this.disciplinaService.delete(id).subscribe(() => {});
    this.load();
  }

  cmdEditar(item: Disciplina){
    var id: number;
    id = Number(item.id);
    this.router.navigateByUrl('cadastros/disciplina/'+id+'/editar');
  }

  load() {
    location.reload();
  }
}
