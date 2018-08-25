import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent {
  @Input() mode: string;
  @Output() modeChange = new EventEmitter<string>();
  @Input() editable: boolean;

  modeControl = new FormControl('', [Validators.required]);

  battleModeGroups = [
    {
      name: 'レギューラーマッチ',
      modes: [
        { value: 'turf_war', label: 'ナワバリバトル' }
      ]
    },
    {
      name: 'ガチマッチ',
      modes: [
        { value: 'splat_zones', label: 'ガチエリア' },
        { value: 'tower_control', label: 'ガチヤグラ' },
        { value: 'rainmaker', label: 'ガチホコバトル' },
        { value: 'clam_blitz', label: 'ガチアサリ' }
      ]
    }
  ];

  constructor() { }
}
