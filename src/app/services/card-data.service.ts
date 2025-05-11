import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardData, CardStatus } from '../models/card-data.interface';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private cardData = new BehaviorSubject<CardData>({
    title: 'Title',
    subtitle: 'Subtitle',
    counter: 0,
    containerTitle: 'Title Container',
    status: 'closed',
    active: false,
  });

  cardData$ = this.cardData.asObservable();

  updateCardData(data: Partial<CardData>) {
    const currentData = this.cardData.value;
    this.cardData.next({ ...currentData, ...data });
  }

  toggleStatus() {
    const currentData = this.cardData.value;
    const newStatus: CardStatus =
      currentData.status === 'open' ? 'closed' : 'open';
    this.updateCardData({ status: newStatus });
  }

  toggleActiveState() {
    const currentData = this.cardData.value;
    this.updateCardData({ active: !currentData.active });
  }
}
