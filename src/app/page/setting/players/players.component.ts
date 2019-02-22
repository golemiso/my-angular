import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/service/player/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(private service: PlayerService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.service.getAll().subscribe(p => this.players = p);
  }

  add(slug: string, name: string) {
    slug = slug.trim();
    name = name.trim();
    if (!slug || !name) { return; }
    const player = new Player();
    player.slug = slug;
    player.name = name;
    this.service.add(player).subscribe(id => {
      player.id = id;
      this.players.push(player)
    });
  }
}
