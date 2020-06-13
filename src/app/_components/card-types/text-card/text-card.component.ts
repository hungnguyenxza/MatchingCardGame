import { Component, OnInit, Input } from '@angular/core';
import { TextCard } from 'src/app/_models/card';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss']
})
export class TextCardComponent implements OnInit {

  @Input() textCard: TextCard;

  constructor() { }

  ngOnInit(): void {
  }

}
