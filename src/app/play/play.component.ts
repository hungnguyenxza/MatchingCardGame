import { Component, OnInit, ViewChild } from '@angular/core';
import { Card, TextCard } from '../_models/card';
import { MatDialog } from '@angular/material/dialog';
import { CongratulationComponent } from '../_components/congratulation/congratulation.component';
import { CardService } from '../_services/card.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  @ViewChild('playTools') playTools: MatSidenav;

  cards: Card[] = [];

  w = 3; h = 2;
  total = this.w * this.h;

  width: Array<number>;
  height: Array<number>;

  constructor(
    private dialog: MatDialog,
    private cardService: CardService
  ) {
    this.initGame(this.w, this.h);
    this.cards = this.cardService.getColorCards(this.total);
  }

  ngOnInit(): void {

  }

  selectedIndex = [];

  openCard(card: Card) {
    const clicked = this.cards.filter(v => v.isClicked);
    if (clicked.length < 2) {
      card.isClicked = true;
      if (clicked.length == 1) {
        if (clicked[0].Equal(card)) {
          clicked[0].isSolved = card.isSolved = true;
          card.isClicked = clicked[0].isClicked = false;
          this.checkFinished();
        }
        else {
          setTimeout(() => {
            card.isClicked = clicked[0].isClicked = false;
          }, 1000);
        }
        return;
      }

      setTimeout(() => {
        card.isClicked = false;
      }, 2000);
    }
  }

  checkFinished() {
    const isFinished = this.cards.every(v => v.isSolved);
    if (isFinished) {
      setTimeout(() => {
        const congu = this.dialog.open(CongratulationComponent);
        this.playTools.open();
        congu.afterClosed().subscribe(data => {
          if (data) {
            this.refresh();
            this.playTools.close();
          }
        })
      }, 500);
    }
  }

  refresh() {
    this.cards = this.cardService.getColorCards(this.total);
  }

  initGame(width: number, height: number) {
    this.width = Array(width).fill(0).map((v, i) => i);
    this.height = Array(height).fill(0).map((v, i) => i);
    this.total = width * height;
    this.refresh();
  }

  changeMode(modeId: number){
    switch(modeId){
      case 1:
        this.initGame(2, 3);
        break;
      case 2:
        this.initGame(3, 4);
        break;
      case 3:
        this.initGame(5, 6);
        break;
    }
  }
}
