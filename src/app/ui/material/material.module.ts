import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatStepperModule,
  MatExpansionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatTabsModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatStepperModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTabsModule,
    DragDropModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [,
    MatDatepickerModule
  ]
})
export class MaterialModule {
}
