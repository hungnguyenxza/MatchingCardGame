import { Component, OnInit, Input } from '@angular/core';
import { ColorCard } from 'src/app/_models/card';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.scss']
})
export class ColorCardComponent implements OnInit {

  @Input() colorCard: ColorCard;


  constructor() { }

  ngOnInit(): void {
  }
}
