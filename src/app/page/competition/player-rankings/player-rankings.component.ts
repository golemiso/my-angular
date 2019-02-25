import { Component, OnInit } from '@angular/core';
import { CompetitionContext } from '../competition.component';
import { PlayerRankingsService } from 'src/app/service/player/player-rankings.service';
import { PlayerRanking } from 'src/app/model/player';

@Component({
  selector: 'app-player-rankings',
  templateUrl: './player-rankings.component.html',
  styleUrls: ['./player-rankings.component.scss']
})
export class PlayerRankingsComponent implements OnInit {
  playerRankings: PlayerRanking[];

  constructor(
    private service: PlayerRankingsService,
    private context: CompetitionContext) { }

  ngOnInit() {
    this.service.getBy(this.context.competition).subscribe(p => this.playerRankings = p);
  }

}
