import { Component, OnInit, Inject } from '@angular/core';
import { CompetitionService } from 'src/app/service/competition/competition.service';
import { Competition } from 'src/app/model/competition';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { range } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {
  competitions: Competition[];

  constructor(private service: CompetitionService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.service.getAll().subscribe(c => this.competitions = c);
  }
}

@Component({
  template: ''
})
export class CompetitionDialogEntryComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private service: CompetitionService) {

    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.service.getBy(slug).subscribe(c => this.openEditDialog(c));
    } else {
      this.openAddDialog();
    }
  }

  openEditDialog(competition: Competition): void {
    const dialogRef = this.dialog.open(CompetitionDialog, {
      data: competition
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(CompetitionDialog, {
      data: new Competition()
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}

@Component({
  selector: 'competition-dialog',
  templateUrl: './dialog.html'
})
export class CompetitionDialog {
  competition: Competition;

  private range = (begin: number, end: number) => ([...Array(end - begin)].map((_, i) => (begin + i)));

  hours: number[] = Array.from(new Array(24)).map((v, i) => i);
  minutes: number[] = Array.from(new Array(60)).map((v, i) => i);

  start: Date;

  constructor(
    public dialogRef: MatDialogRef<CompetitionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Competition) {
    this.competition = data;
    this.competition.schedule.start = new Date(this.competition.schedule.start);
    this.competition.schedule.end = new Date(this.competition.schedule.end);
  }
}
