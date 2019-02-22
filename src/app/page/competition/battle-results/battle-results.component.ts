import { Component, OnInit } from '@angular/core';
import { SelectedCompetition } from '../competition.component';

@Component({
  selector: 'app-battle-results',
  templateUrl: './battle-results.component.html',
  styleUrls: ['./battle-results.component.scss']
})
export class BattleResultsComponent implements OnInit {

  constructor(private selected: SelectedCompetition) { }

  ngOnInit() {
  }

}
