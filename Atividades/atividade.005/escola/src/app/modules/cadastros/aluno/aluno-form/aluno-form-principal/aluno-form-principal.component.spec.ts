import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormPrincipalComponent } from './aluno-form-principal.component';

describe('AlunoFormPrincipalComponent', () => {
  let component: AlunoFormPrincipalComponent;
  let fixture: ComponentFixture<AlunoFormPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoFormPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoFormPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
