import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaQuestionarioComponent } from './etapa-questionario.component';

describe('EtapaQuestionarioComponent', () => {
  let component: EtapaQuestionarioComponent;
  let fixture: ComponentFixture<EtapaQuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaQuestionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaQuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
