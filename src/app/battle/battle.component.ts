import { Component, Input, OnInit } from '@angular/core';
import { Battle } from './battle';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  @Input() battles: Battle[];

  constructor() { }

  ngOnInit() {
  }

}
