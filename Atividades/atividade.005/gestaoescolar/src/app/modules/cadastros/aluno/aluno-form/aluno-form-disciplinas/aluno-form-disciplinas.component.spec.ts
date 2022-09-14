import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormDisciplinasComponent } from './aluno-form-disciplinas.component';

describe('AlunoFormDisciplinasComponent', () => {
  let component: AlunoFormDisciplinasComponent;
  let fixture: ComponentFixture<AlunoFormDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoFormDisciplinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoFormDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
