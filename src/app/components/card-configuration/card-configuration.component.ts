import { Component } from '@angular/core';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-card-configuration',
  templateUrl: './card-configuration.component.html',
  styleUrls: ['./card-configuration.component.scss']
})
export class CardConfigurationComponent {
  cardData$ = this.cardDataService.cardData$;

  constructor(private cardDataService: CardDataService) { }

  updateTitle(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.cardDataService.updateCardData({ title: value });
  }

  updateSubtitle(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.cardDataService.updateCardData({ subtitle: value });
  }

  updateContainerTitle(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.cardDataService.updateCardData({ containerTitle: value });
  }

}
