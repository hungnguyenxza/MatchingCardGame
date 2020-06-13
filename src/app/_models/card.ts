import { CardType } from '../_enums/card-type.enum';

export abstract class Card {
    constructor(){
        this.isClicked = this.isSolved = false;
    }
    isClicked: boolean;
    isSolved: boolean;
    cardType: number;

    abstract Equal(target: Card): boolean;
    
    Opening(): void{
        this.isClicked = true;
    }

    isTextCard(): boolean{
        return this.cardType === CardType.Text;
    }
    isColorCard(): boolean{
        return this.cardType === CardType.Color;
    }
    isImageCard(): boolean{
        return this.cardType === CardType.Image;
    }
}

export class TextCard extends Card{
    content: string;

    constructor(){
        super();
        this.cardType = CardType.Text;
    }

    Equal(target: Card): boolean {
        if(typeof target === typeof this
            && target !== this){
            return this.content === (target as TextCard).content;
        }
        return false;
    }
}

export class ColorCard extends Card{
    color: string;

    Equal(target: Card): boolean {
        if(typeof target === typeof this
            && target !== this){
            return this.color === (target as ColorCard).color;
        }
        return false;
    }

    constructor(){
        super();
        this.cardType = CardType.Color;
    }

}