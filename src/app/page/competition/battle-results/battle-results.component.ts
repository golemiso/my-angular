import { Component, OnInit } from '@angular/core';
import { SelectedCompetition } from '../competition.component';
import { BattleService } from 'src/app/service/battle/battle.service';
import { Battle } from 'src/app/model/battle';

@Component({
  selector: 'app-battle-results',
  templateUrl: './battle-results.component.html',
  styleUrls: ['./battle-results.component.scss']
})
export class BattleResultsComponent implements OnInit {
  battles: Battle[];

  constructor(
    private selected: SelectedCompetition,
    private battleService: BattleService) { }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this.battleService.getBy(this.selected.competition).subscribe(b => this.battles = b);
  }

  deleteBattle(battle: Battle) {
    const index = this.battles.indexOf(battle, 0);
    this.battles.splice(index, 1);
  }
}
