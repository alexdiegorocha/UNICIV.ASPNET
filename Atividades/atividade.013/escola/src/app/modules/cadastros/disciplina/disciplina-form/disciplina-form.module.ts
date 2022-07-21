import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DisciplinaFormRoutingModule } from './disciplina-form-routing.module';
import { DisciplinaFormComponent } from './disciplina-form.component';


@NgModule({
  declarations: [
    DisciplinaFormComponent
  ],
  imports: [
    CommonModule,
    DisciplinaFormRoutingModule,
    FormsModule
  ]
})
export class DisciplinaFormModule { }
