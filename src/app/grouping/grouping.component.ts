import { Component, OnInit } from '@angular/core';
import { GroupingService } from './grouping.service';
import { Grouping } from './grouping';
import { Battle, Competitors } from 'src/app/model/battle';
import { TeamComponent } from '../team/team.component';
import { DropEvent } from 'ng-drag-drop/src/shared/drop-event.model';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements OnInit {
  grouping: Grouping;
  battles: Battle[] = [];
  tempTeams: Team[] = [];

  constructor(private service: GroupingService) { }

  ngOnInit() {
    this.getGrouping();
  }

  getGrouping() {
    this.service.getGrouping()
      .subscribe(grouping => this.grouping = grouping);
  }

  onTeamDrop(e: DropEvent) {
    const teamComponent = e.dragData as TeamComponent;
    this.tempTeams.push(teamComponent.team);

    if (this.tempTeams.length === 2) {
      const battle = new Battle;
      battle.competitors = new Competitors
      battle.competitors.left = this.tempTeams[0];
      battle.competitors.right = this.tempTeams[1];
      battle.name = battle.competitors.left.name + ' vs ' + battle.competitors.right.name;
      this.battles.push(battle);
      this.tempTeams = [];
    }
  }

  addBattles(e: Event) {
    this.battles.forEach(battle => this.service.addBattle(battle).subscribe());
  }
}
