import { Component, Input } from '@angular/core';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
@Input() processo!: ProcessoSeletivo;
}
