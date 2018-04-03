import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(private service: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.service.getPlayers()
      .subscribe(players => this.players = players);
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    const player = new Player();
    player.name = name;
    this.service.addPlayer(player)
      .subscribe(p => this.players.push(p));
  }
}
