import { Component, OnInit, Injectable } from '@angular/core';
import { CompetitionService } from 'src/app/service/competition/competition.service';
import { Competition } from 'src/app/model/competition';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CompetitionContext {
  competition: Competition;
}

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  constructor(
    public context: CompetitionContext,
    private service: CompetitionService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.service.getBy(slug).subscribe(c => this.context.competition = c);
  }
}
