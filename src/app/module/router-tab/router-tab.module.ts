import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTabComponent, RouterTabItem, RouterTab } from './router-tab.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    RouterTabComponent,
    RouterTabItem,
    RouterTab
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule
  ],
  exports: [
    RouterTabComponent,
    RouterTabItem,
    RouterTab
  ]
})
export class RouterTabModule { }
