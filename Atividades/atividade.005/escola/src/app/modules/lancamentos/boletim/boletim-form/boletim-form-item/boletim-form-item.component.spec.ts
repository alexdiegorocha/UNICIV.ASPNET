import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimFormItemComponent } from './boletim-form-item.component';

describe('BoletimFormItemComponent', () => {
  let component: BoletimFormItemComponent;
  let fixture: ComponentFixture<BoletimFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletimFormItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletimFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
