import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInformationComponent {
  @Input() title: string = "";
  @Input() visible: boolean = false;

  @Output() close = new EventEmitter<boolean>();
  
  closeCardInformation() {
    this.close.emit(false);
  }
}
