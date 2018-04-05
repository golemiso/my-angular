import { Component, Input, OnInit } from '@angular/core';
import { Battle } from './battle';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent implements OnInit {
  @Input() battles: Battle[];

  constructor() { }

  ngOnInit() {
  }

}
