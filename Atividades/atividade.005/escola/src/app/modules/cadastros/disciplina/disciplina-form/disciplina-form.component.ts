import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disciplina } from 'src/app/core/models/disciplina.model';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.sass'],
})
export class DisciplinaFormComponent implements OnInit {
  @Input() model: Disciplina = { AlunoDisciplinas: [] };
  @Output() modelEvent = new EventEmitter<Disciplina>();
  incluir: boolean = false;
  editar: boolean = false;
  habilitarEdicao: boolean = false;
  mensagem: string = '';
  id: number = 0;

  constructor(
    private actionRouter: ActivatedRoute,
    private router: Router,
    private disciplinaService: DisciplinaService,
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
      this.cmdCarregarDiscipliaPorId(this.id);
    }
  }

  habilitaDesabilitaEdicao() {
    this.habilitarEdicao = !this.habilitarEdicao;
  }

  cmdSalvar() {
    this.disciplinaService.post(this.model).subscribe(
      (value: Disciplina) => {
        this.mensagem = 'Salvo com sucesso!';
        console.log("teste");
      },
      (err) => {
        this.mensagem = 'Erro ao salvar!';
      }
    );
  }

  cmdEditar() {
    this.disciplinaService.put(this.id, this.model).subscribe(
      (value: Disciplina) => {
        this.mensagem = 'Alterado com sucesso!';
      },
      (err) => {
        this.mensagem = 'Erro ao salvar!';
      }
    );
  }

  cmdNovo(){
    this.model = { AlunoDisciplinas: [] };
    this.id = 0;
    this.incluir = false;
    this.editar = false;
    this.habilitarEdicao = false;
    this.mensagem = '';
  }

  cmdCarregarDiscipliaPorId(id: number) {
    this.disciplinaService
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
