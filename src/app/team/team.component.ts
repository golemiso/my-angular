import { Component, Input } from '@angular/core';
import { DropEvent } from 'ng-drag-drop/src/shared/drop-event.model';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../player/player';
import { Team } from '../model/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  @Input() team: Team;
  @Input() teamDragDropEnabled: boolean;
  @Input() playerDragDropEnabled: boolean;

  constructor() { }

  onPlayerDrop(e: DropEvent) {
    const playerComponent = e.dragData as PlayerComponent;
    this.team.players.push(playerComponent.player);
    playerComponent.delete();
  }

  deletePlayer(player: Player) {
    const index = this.team.players.indexOf(player, 0);
    this.team.players.splice(index, 1);
  }
}
