import { Component, Input, OnInit } from '@angular/core';
import { Battle } from '../battle';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.scss']
})
export class BattlesComponent implements OnInit {
  @Input() battles: Battle[];

  constructor() { }

  ngOnInit() {
  }

  deleteBattle(battle) {
    const index = this.battles.indexOf(battle, 0);
    this.battles.splice(index, 1);
  }
}
