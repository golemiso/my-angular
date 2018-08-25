import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Battle, BattleResult } from './battle';
import { BattleService } from './battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  @Input() battle: Battle;
  @Input() resultMode: boolean;
  @Output() deleteBattleRequest = new EventEmitter<Battle>();
  editable: boolean;

  constructor(private service: BattleService) { }

  ngOnInit() {
    if (!this.resultMode) {
      this.editable = true;
      return;
    }
    if (this.battle.result) {
      this.battle.teams.map(t => {
        if (t.id === this.battle.result.victory) {
          t.title = 'Win';
        } else {
          t.title = 'Lose';
        }
      });
    } else {
      this.editable = true;
      this.battle.result = new BattleResult;
    }
  }

  judge(victory: string) {
    this.battle.teams.map(t => {
      if (victory === t.id) {
        this.battle.result.victory = t.id;
      } else {
        this.battle.result.defeat = t.id;
      }
    });
    this.ngOnInit();
    this.service.updateBattle(this.battle).subscribe();
  }

  editButton() {
    this.editable = true;
  }
  deleteButton() {
    if (this.battle.id) {
      this.service.removeBattle(this.battle).subscribe();
    }
    this.deleteBattleRequest.emit(this.battle);
    this.editable = false;
  }
  okButton() {
    this.service.updateBattle(this.battle).subscribe();
    this.editable = false;
  }
}
