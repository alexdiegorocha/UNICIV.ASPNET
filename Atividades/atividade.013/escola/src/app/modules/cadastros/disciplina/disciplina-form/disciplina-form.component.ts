import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Disciplina } from 'src/app/core/models/disciplina.model';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.sass']
})
export class DisciplinaFormComponent implements OnInit {
  @Input() model: Disciplina = {};
  @Output() modelEvent = new EventEmitter<Disciplina>();
  incluir: boolean = false;
  editar: boolean = false;
  habilitarEdicao: boolean = false

  constructor(
    private actionRouter: ActivatedRoute,
    private router: Router,
    private disciplinaService: DisciplinaService
  ) {
    var dataRouting = this.actionRouter.data;
    dataRouting.subscribe((data) => {
      this.incluir = data['action'] == "incluir";
      this.editar = data['action'] == "editar";
      this.habilitarEdicao = this.incluir || this.editar;
    });
  }

  ngOnInit(): void {
    this.model = this.model ?? {};
  }

  habilitaDesabilitaEdicao(){
    this.habilitarEdicao = !this.habilitarEdicao
  }

  cmdSalvar() {
      this.disciplinaService.post(this.model).subscribe((value: Disciplina) => {
        console.log(value);
      });
      this.load();
  }

  load(){
    location.reload();
  }
}
