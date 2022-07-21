import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/core/models/aluno.model';
import { Location } from '@angular/common';
import { AlunoService } from './../../../../core/services/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.sass'],
})
export class AlunoFormComponent implements OnInit {
  @Input() model: Aluno = {};
  @Output() modelEvent = new EventEmitter<Aluno>();
  disabled: boolean = false;
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
    this.model = this.model ?? {};
  }

  cmdSalvar() {
    this.disabled = !this.disabled;
    this.alunoService.post(this.model).subscribe((value: Aluno) => {
      console.log(value);
    });
  }

  cmdCancelar() {
    this.location.back();
  }

  load() {
    location.reload();
  }

  habilitaDesabilitaEdicao() {
    this.habilitarEdicao = !this.habilitarEdicao;
  }
}
