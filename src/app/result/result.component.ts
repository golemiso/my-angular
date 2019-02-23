import { Component, OnInit } from '@angular/core';
import { Battle } from '../model/battle';
import { BattleService } from '../component/battle/battle.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
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
