import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player/player.service';
import { MaterialModule } from './common/material/material.module';
import { TeamComponent } from './team/team.component';
import { GroupingComponent } from './grouping/grouping.component';
import { GroupingService } from './grouping/grouping.service';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PlayerComponent,
    TeamComponent,
    GroupingComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    NgDragDropModule.forRoot(),
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    PlayerService,
    GroupingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
