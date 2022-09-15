import { Location } from '@angular/common';
import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Aluno } from './../../../../core/models/aluno.model';
import { AlunoService } from './../../../../core/services/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.sass'],
})
export class AlunoFormComponent implements OnInit {
  @Input() model: Aluno = { alunoDisciplinas: [] };
  @Output() modelEvent = new EventEmitter<Aluno>();
  incluir: boolean = false;
  editar: boolean = false;
  habilitarEdicao: boolean = false;
  mensagem: string = '';
  id: number = 0;
  abaPrincipal: boolean = true;
  abaDisciplina: boolean = false;
  disabled: boolean = false;

  constructor(
    private actionRouter: ActivatedRoute,
    private alunoService: AlunoService,
    private activatedroute: ActivatedRoute,
    private location: Location
  ) {
    var dataRouting = this.actionRouter.data;
    dataRouting.subscribe((data) => {
      this.incluir = data['action'] == 'incluir';
      this.editar = data['action'] == 'editar';
      this.habilitarEdicao = this.incluir || this.editar;
      this.id = Number(this.activatedroute.snapshot.paramMap.get('id'));
    });
  }

  ngOnInit(): void {
    this.model = this.model ?? { alunoDisciplinas: [], turma: [] };
    if (this.editar) {
      this.cmdCarregarAlunoPorId(this.id);
    }
  }

  alternarAba() {
    this.abaPrincipal = !this.abaPrincipal;
    this.abaDisciplina = !this.abaDisciplina;
  }

  habilitaDesabilitaEdicao() {
    this.habilitarEdicao = !this.habilitarEdicao;
  }

  cmdSalvar() {
    this.alunoService.post(this.model).subscribe(
      (value: Aluno) => {
        this.mensagem = 'Salvo com sucesso!';
      },
      (err) => {
        this.mensagem = 'Erro ao salvar!';
      }
    );
    this.disabled = false;
  }

  cmdEditar() {
    this.alunoService.put(this.id, this.model).subscribe(
      (value: Aluno) => {
        this.mensagem = 'Alterado com sucesso!';
      },
      (err) => {
        this.mensagem = 'Erro ao salvar!';
      }
    );
  }

  cmdNovo() {
    this.model = { alunoDisciplinas: [], turma:{} };
    this.id = 0;
    this.incluir = false;
    this.editar = false;
    this.habilitarEdicao = false;
    this.mensagem = '';
  }

  cmdCancelar() {
    this.location.back();
  }

  cmdCarregarAlunoPorId(id: number) {
    this.alunoService
      .getById(id)
      .subscribe((resultado) => (this.model = resultado));
  }

  load() {
    location.reload();
  }

  apagarMensagem() {
    this.mensagem = '';
    this.load();
  }
}
