import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../service/competition/competition.service';
import { Competition } from '../model/competition';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  competition: Competition = new Competition();

  constructor(
    private service: CompetitionService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.service.getBy(slug).subscribe(c => this.competition = c);
  }

}
