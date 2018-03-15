import { Component, OnInit } from '@angular/core';
import { GroupingService } from './grouping.service';
import { Grouping } from './grouping';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.css']
})
export class GroupingComponent implements OnInit {
  grouping: Grouping;

  constructor(private service: GroupingService) { }

  ngOnInit() {
    this.getGrouping();
  }

  getGrouping() {
    this.service.getGrouping()
      .subscribe(grouping => this.grouping = grouping);
  }
}
