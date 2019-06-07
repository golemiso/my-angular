import { Component, OnInit } from '@angular/core';
import { CompetitionContext } from '../competition.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Battle, Competitors, Mode, GroupingPattern } from 'src/app/model/battle';
import { BattleService } from 'src/app/service/battle/battle.service';
import { SettingService } from 'src/app/service/setting/setting.service';

@Component({
  selector: 'app-create-battles',
  templateUrl: './create-battles.component.html',
  styleUrls: ['./create-battles.component.scss']
})
export class CreateBattlesComponent implements OnInit {
  mode: Mode;
  modes: Mode[];
  groupingPatterns: GroupingPattern[];
  competitors: Competitors[];
  tempCompetitors: Competitors[] = [];
  battles: Battle[] = [];


  constructor(
    private context: CompetitionContext,
    private battleService: BattleService,
    private settingService: SettingService) {
    this.settingService.getModes(this.context.competition).subscribe(m => this.modes = m);
    this.settingService.getGroupingPatterns(this.context.competition).subscribe(g => this.groupingPatterns = g);
  }

  ngOnInit() { }

  fetchNewGroups(mode: Mode, groupingPattern: GroupingPattern) {
    this.battleService.getNewGroups(this.context.competition, mode, groupingPattern).subscribe(c => this.competitors = c);
  }

  onPlayerDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onCompetitorsDrop(event: CdkDragDrop<Competitors>) {
    this.tempCompetitors.push(event.item.data);

    if (this.tempCompetitors.length === 2) {
      const battle = new Battle;
      battle.mode = this.mode;
      battle.competitors = this.tempCompetitors;
      this.battles.push(battle);
      this.tempCompetitors = [];
    }
  }

  addBattles(e: Event) {
    this.battles.forEach(battle => this.battleService.add(this.context.competition, battle).subscribe(b => battle.id = b.id));
    this.battles = [];
    this.tempCompetitors = [];
  }
}
