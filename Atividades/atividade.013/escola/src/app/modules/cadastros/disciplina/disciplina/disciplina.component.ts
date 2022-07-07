import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/core/models/disciplina.model';
import { DisciplinaService } from 'src/app/core/services/disciplina.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.sass']
})
export class DisciplinaComponent implements OnInit {
  form: FormGroup;
  disciplinas$: Observable<Disciplina[]>;
  constructor(
    private disciplinaService: DisciplinaService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null]
    });

    this.disciplinas$ = this.disciplinaService.get();
  }

  ngOnInit(): void {}

  cmdSalvar() {
    this.disciplinaService.post(this.form.value).subscribe((value: Disciplina) => {
      console.log(value);
    });
    this.load();
  }

  cmdCancelar() {
    this.location.back();
  }

  load(){
    location.reload();
  }

  cmdExcluir(id:number){
    this.disciplinaService.delete(id).subscribe();
    this.load();
  }



}
