export type CardStatus = 'open' | 'closed';

export interface CardData {
    title: string;
    subtitle: string;
    counter: number;
    containerTitle: string;
    status: CardStatus;
    active: boolean;
    disabled: boolean;
}