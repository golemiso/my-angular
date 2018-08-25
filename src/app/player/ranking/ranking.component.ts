import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerRecord } from '../player';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
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
