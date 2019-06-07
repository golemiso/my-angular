import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Battle, Result } from 'src/app/model/battle';
import { BattleService } from 'src/app/service/battle/battle.service';
import { CompetitionContext } from 'src/app/page/competition/competition.component';
import { SettingService } from 'src/app/service/setting/setting.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  @Input() battle: Battle;
  @Input() resultMode: boolean;
  @Output() deleteBattleRequest = new EventEmitter<Battle>();
  editable: boolean;
  results: Result[];

  constructor(private context: CompetitionContext, private service: BattleService, settingService: SettingService) {
    settingService.getResults(this.context.competition).subscribe(r => this.results = r);
  }

  ngOnInit() {
    if (!this.resultMode) {
      this.editable = true;
      return;
    }
    if (!this.battle.competitors[0].result) {
      this.editable = true;
    }
  }

  onResultChange(competitorId: string, resultId: string) {
    this.battle.competitors.find(c => c.id == competitorId).result = resultId;
  }

  editButton() {
    this.editable = true;
  }
  deleteButton() {
    if (this.battle.id) {
      // this.service.remove(this.battle).subscribe();
    }
    this.deleteBattleRequest.emit(this.battle);
    this.editable = false;
  }
  okButton() {
    this.service.changeResult(this.context.competition, this.battle).subscribe();
    this.editable = false;
  }
}
