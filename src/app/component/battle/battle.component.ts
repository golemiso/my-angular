import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Battle } from 'src/app/model/battle';
import { BattleService } from 'src/app/service/battle/battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  @Input() battle: Battle;
  @Input() resultMode: boolean;
  @Output() deleteBattleRequest = new EventEmitter<Battle>();
  editable: boolean;

  constructor(private service: BattleService) { }

  ngOnInit() {
    if (!this.resultMode) {
      this.editable = true;
      return;
    }
    if (!this.battle.result) {
      this.editable = true;
    }
  }

  onResultChange(result: string) {
    this.battle.result = result;

    window.alert(result);
    this.ngOnInit();
    this.service.changeResult(this.battle).subscribe();
  }

  editButton() {
    this.editable = true;
  }
  deleteButton() {
    if (this.battle.id) {
      // this.service.remove(this.battle).subscribe();
    }
    this.deleteBattleRequest.emit(this.battle);
    this.editable = false;
  }
  okButton() {
    // this.service.change(this.battle).subscribe();
    this.editable = false;
  }
}
