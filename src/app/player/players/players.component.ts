import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
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

  add(slug: string, name: string) {
    slug = slug.trim();
    name = name.trim();
    if (!slug || !name) { return; }
    const player = new Player();
    player.slug = slug;
    player.name = name;
    this.service.addPlayer(player)
      .subscribe(id => {
        player.id = id;
        this.players.push(player)
      });
  }
}
