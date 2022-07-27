import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from './../../../../core/models/aluno.model';
import { Location } from '@angular/common';
import { AlunoService } from './../../../../core/services/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.sass'],
})
export class AlunoFormComponent implements OnInit {
  @Input() model: Aluno = { AlunoDisciplinas: [] };
  @Output() modelEvent = new EventEmitter<Aluno>();
  disabled: boolean = false;
  abaPrincipal: boolean = true;
  abaDisciplina: boolean = false;
  incluir: boolean = false;
  editar: boolean = false;
  habilitarEdicao: boolean = false;

  constructor(private actionRouter: ActivatedRoute, private router: Router, private location: Location, private alunoService: AlunoService) {
    var dataRouting = this.actionRouter.data;
    dataRouting.subscribe((data) => {
      this.incluir = data['action'] == 'incluir';
      this.editar = data['action'] == 'editar';
      this.habilitarEdicao = this.incluir || this.editar;
    });
  }

  ngOnInit(): void {
    this.model = this.model ?? { AlunoDisciplinas: [] };
  }

  cmdSalvar() {
    this.alunoService.post(this.model).subscribe((value: Aluno) => {
    });
    this.load();
    this.disabled = false;
  }

  cmdCancelar() {
    this.location.back();
  }

  load() {
    location.reload();
  }

  alternarAba(){
    this.abaPrincipal = !this.abaPrincipal
    this.abaDisciplina = !this.abaDisciplina
  }
}
