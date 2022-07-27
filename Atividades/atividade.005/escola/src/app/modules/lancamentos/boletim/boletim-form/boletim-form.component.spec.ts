import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimFormComponent } from './boletim-form.component';

describe('BoletimFormComponent', () => {
  let component: BoletimFormComponent;
  let fixture: ComponentFixture<BoletimFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletimFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
