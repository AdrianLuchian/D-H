import { Component } from '@angular/core';
import { CardStatus } from 'src/app/models/card-data.interface';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent {
  cardData$ = this.cardDataService.cardData$;

  constructor(private cardDataService: CardDataService) {}

  updateActive(isActive: boolean) {
    const status: CardStatus = isActive ? 'open' : 'closed';
    this.cardDataService.updateCardData({ active: isActive, status });
  }
}
