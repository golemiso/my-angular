import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerRecord } from '../player';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {
  playerRankings: PlayerRecord[];

  constructor(private service: PlayerService) { }

  ngOnInit() {
    this.getPlayerRankings();
  }

  getPlayerRankings() {
    this.service.getPlayerRankings()
      .subscribe(playerRankings => this.playerRankings = playerRankings);
  }
}
