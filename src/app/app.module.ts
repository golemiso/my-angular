import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player/player.service';
import { MaterialModule } from './common/material/material.module';
import { TeamComponent } from './team/team.component';
import { GroupingComponent } from './grouping/grouping.component';
import { GroupingService } from './grouping/grouping.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlayerComponent,
    TeamComponent,
    GroupingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    NgDragDropModule.forRoot()
  ],
  providers: [
    HeroService,
    MessageService,
    PlayerService,
    GroupingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
