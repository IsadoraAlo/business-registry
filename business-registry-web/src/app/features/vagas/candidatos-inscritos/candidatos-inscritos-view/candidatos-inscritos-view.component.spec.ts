import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosInscritosViewComponent } from './candidatos-inscritos-view.component';

describe('CandidatosInscritosViewComponent', () => {
  let component: CandidatosInscritosViewComponent;
  let fixture: ComponentFixture<CandidatosInscritosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatosInscritosViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatosInscritosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
