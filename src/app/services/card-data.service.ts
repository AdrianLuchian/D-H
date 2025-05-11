import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardData } from '../models/card-data.interface';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private cardData = new BehaviorSubject<CardData>({
    title: 'Title 2.2',
    subtitle: 'Content',
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
}
