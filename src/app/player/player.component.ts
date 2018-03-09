import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: Player[];

  constructor(private service: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.service.getPlayers()
      .subscribe(players => this.players = players);
  }
}
