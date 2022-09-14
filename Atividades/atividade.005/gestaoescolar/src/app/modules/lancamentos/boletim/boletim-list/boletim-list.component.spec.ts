import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimListComponent } from './boletim-list.component';

describe('BoletimListComponent', () => {
  let component: BoletimListComponent;
  let fixture: ComponentFixture<BoletimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletimListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
