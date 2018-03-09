import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatSidenavModule],
  exports: [BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatSidenavModule]
})
export class MaterialModule { }
