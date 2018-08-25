import { Component, OnInit } from '@angular/core';
import { Battle, BattleResult } from '../battle/battle';
import { BattleService } from '../battle/battle.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  battles: Battle[];

  constructor(private service: BattleService) { }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this.service.getBattles()
      .subscribe(battles => this.battles = battles);
  }

  deleteBattle(battle) {
    const index = this.battles.indexOf(battle, 0);
    this.battles.splice(index, 1);
  }
}
