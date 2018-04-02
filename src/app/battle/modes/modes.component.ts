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

  modeControl = new FormControl('', [Validators.required]);

  battleModeGroups = [
    { name: 'Regular Battle',
      modes: [
        { value: 'turf_war', label: 'Turf War' }
      ]
    },
    { name: 'Ranked Battle',
      modes: [
        { value: 'splat_zones', label: 'Splat Zones' },
        { value: 'tower_control', label: 'Tower Control' },
        { value: 'rainmaker', label: 'Rainmaker' },
        { value: 'clam_blitz', label: 'Clam Blitz' }
      ]
    }
  ];
  battleModes = [
    { value: 'turf_war', label: 'Turf War' },
    { value: 'splat_zones', label: 'Splat Zones' },
    { value: 'tower_control', label: 'Tower Control' },
    { value: 'rainmaker', label: 'Rainmaker' },
    { value: 'clam_blitz', label: 'Clam Blitz' }
  ];

  constructor() { }
}
