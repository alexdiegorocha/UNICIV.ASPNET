import { TurmaService } from './../../../../core/services/turma.service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from './../../../../core/models/turma.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.sass']
})
export class TurmaFormComponent implements OnInit {
  @Input() model: Turma = { alunos:[] };
  @Output() modelEvent = new EventEmitter<Turma>();
  incluir: boolean = false;
  editar: boolean = false;
  habilitarEdicao: boolean = false;
  mensagem: string = '';
  id: number = 0;

  constructor(
    private actionRouter: ActivatedRoute,
    private router: Router,
    private turmaService: TurmaService,
    private activatedroute: ActivatedRoute
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
    this.model = this.model ?? {};
    if (this.editar) {
      this.cmdCarregarTurmaPorId(this.id);
    }
  }

  habilitaDesabilitaEdicao() {
    this.habilitarEdicao = !this.habilitarEdicao;
  }

  cmdSalvar() {
    this.turmaService.post(this.model).subscribe(
      (value: Turma) => {
        this.mensagem = 'Salvo com sucesso!';
      },
      (err) => {
        this.mensagem = 'Erro ao salvar!';
      }
    );
  }

  cmdEditar() {
    this.turmaService.put(this.id, this.model).subscribe(
      (value: Turma) => {
        this.mensagem = 'Alterado com sucesso!';
      },
      (err) => {
        this.mensagem = 'Erro ao salvar!';
      }
    );
  }

  cmdNovo(){
    this.model = { alunos:[]};
    this.id = 0;
    this.incluir = false;
    this.editar = false;
    this.habilitarEdicao = false;
    this.mensagem = '';
  }

  cmdCarregarTurmaPorId(id: number) {
    this.turmaService
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
