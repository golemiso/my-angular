import { Component, OnInit } from '@angular/core';
import { CompetitionContext } from '../competition.component';
import { PlayerRankingsService } from 'src/app/service/player/player-rankings.service';
import { PlayerRankings } from 'src/app/model/player';

@Component({
  selector: 'app-player-rankings',
  templateUrl: './player-rankings.component.html',
  styleUrls: ['./player-rankings.component.scss']
})
export class PlayerRankingsComponent implements OnInit {
  dataSource: RankingTableElement[];

  constructor(
    private service: PlayerRankingsService,
    private context: CompetitionContext) { }

  ngOnInit() {
    this.service.getBy(this.context.competition).subscribe(p => {
      this.dataSource = p.totalRanking.map(r => {
        return { ranking: r.ranking, name: r.player.name, score: r.score };
      });
    });
  }

  displayedColumns: string[] = ['ranking', 'name', 'score'];
}

interface RankingTableElement {
  ranking: number;
  name: string;
  score: number;
}
