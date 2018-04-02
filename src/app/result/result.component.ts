import { Component, OnInit } from '@angular/core';
import { ResultService } from './result.service';
import { Battle } from '../battle/battle';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  battles: Battle[];

  constructor(private service: ResultService) { }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this.service.getBattles()
      .subscribe(battles => this.battles = battles);
  }
}
