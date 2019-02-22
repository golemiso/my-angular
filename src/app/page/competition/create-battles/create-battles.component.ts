import { Component, OnInit } from '@angular/core';
import { SelectedCompetition } from '../competition.component';
import { PlayerRanking, Player } from 'src/app/model/player';
import { Team } from 'src/app/model/team';
import { PlayerRankingsService } from 'src/app/service/player/player-rankings.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Battle, Competitors } from 'src/app/model/battle';

class TeamView {
  name: string;
  players: Player[];
}

@Component({
  selector: 'app-create-battles',
  templateUrl: './create-battles.component.html',
  styleUrls: ['./create-battles.component.scss']
})
export class CreateBattlesComponent implements OnInit {
  teams: Team[];
  battles: Battle[] = [];
  tempTeams: Team[] = [];

  constructor(
    private selected: SelectedCompetition,
    private playerRankingsService: PlayerRankingsService) {
    this.playerRankingsService.getBy(this.selected.competition).subscribe(p => this.teams = this.makeTeamsFromPlayerRankings(p));
  }

  ngOnInit() {
  }

  private makeTeamsFromPlayerRankings(playerRecords: PlayerRanking[], into: number = 2, playersPerTeam: number = 4): Team[] {
    const count = playerRecords.length;
    const teams = [];

    for (let i = 0; i < into; i++) {
      const team = new Team;
      team.players = [];
      team.name = 'チーム' + (i + 1);
      teams.push(team);
    }

    for (let i = 0; i < into * playersPerTeam && i < count; i++) {
      const q = Math.floor(i / into);
      const r = i % into;

      switch (q % 2) {
        case 0: // even
          teams[r].players.push(playerRecords[i].player);
          break;
        case 1: // odd
          teams[into - 1 - r].players.push(playerRecords[i].player);
          break;
      }
    }

    return teams;
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

  onTeamDrop(event: CdkDragDrop<Team[]>) {
    this.tempTeams.push(event.previousContainer.data[event.previousIndex]);



    window.alert(event.previousContainer.data[event.previousIndex]);

    if (this.tempTeams.length === 2) {
      const battle = new Battle;
      battle.competitors = new Competitors;
      battle.competitors.left = this.tempTeams[0];
      battle.competitors.right = this.tempTeams[1];
      battle.name = battle.competitors.left.name + ' vs ' + battle.competitors.right.name;
      this.battles.push(battle);
      this.tempTeams = [];
    }
  }
}
