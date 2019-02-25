import { Component, OnInit } from '@angular/core';
import { CompetitionContext } from '../competition.component';

@Component({
  selector: 'app-competition-dashboard',
  templateUrl: './competition-dashboard.component.html',
  styleUrls: ['./competition-dashboard.component.scss']
})
export class CompetitionDashboardComponent implements OnInit {

  constructor(private context: CompetitionContext) { }

  ngOnInit() {
  }

}
