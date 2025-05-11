import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() counter: number = 0;
  @Input() disabled = true;
  @Input() active = false;
}
