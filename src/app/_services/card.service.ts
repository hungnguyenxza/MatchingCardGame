import { Injectable } from '@angular/core';
import { Card, TextCard, ColorCard } from '../_models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  colors = ['#EF9A9A', '#F8BBD0', '#AB47BC', '#64B5F6', '#4DB6AC', '#FFF176', '#FFB74D', '#424242', '#795548', '#78909C', '#00E676'];
  
  constructor() { }
  
  getCards(totalCards: number): Card[]{
    
    let numbers = [];

    for (let i = 0; i < totalCards / 2; i++) {
      numbers[i] = i;
      numbers[i + totalCards / 2] = i;
    }
    let cards = [];

    for (let i = 0; i < totalCards; i++) {
      const card = new TextCard();
      const index = this.getRandomIndex(0, numbers.length);
      card.content = numbers.splice(index, 1)[0].toString();
      cards.push(card);
    }

    return cards;
  }

  getColorCards(totalCards: number): Card[]{
    let cards = [];

    const colorsSystem = [...this.colors];

    const colorsPicked = [];

    for (let i = 0; i < totalCards / 2; i++) {
        let ran = this.getRandomIndex(0, this.colors.length);
        let color = this.colors[ran]
        colorsPicked.push(color);
        colorsPicked.push(color);
    }

    for (let i = 0; i < totalCards; i++) {
      let ran = this.getRandomIndex(0, colorsPicked.length);
      const card = new ColorCard();
      card.color = colorsPicked.splice(ran, 1)[0];
      cards.push(card);      
    }

    return cards;
  }

  private getRandomIndex(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
