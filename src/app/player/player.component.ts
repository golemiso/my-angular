import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() player: Player;
  @Input() playerDragDropEnabled: boolean;
  @Output() deleteRequest = new EventEmitter<Player>();

  constructor() { }

  delete() {
    this.deleteRequest.emit(this.player);
  }
}
