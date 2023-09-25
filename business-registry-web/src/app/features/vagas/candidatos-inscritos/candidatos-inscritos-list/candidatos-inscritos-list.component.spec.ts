import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosInscritosListComponent } from './candidatos-inscritos-list.component';

describe('CandidatosInscritosListComponent', () => {
  let component: CandidatosInscritosListComponent;
  let fixture: ComponentFixture<CandidatosInscritosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatosInscritosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatosInscritosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
