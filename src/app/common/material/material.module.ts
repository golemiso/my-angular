import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
     MatToolbarModule,
      MatIconModule,
       MatButtonModule,
        MatListModule,
         MatSidenavModule,
         MatCardModule
        ],
  exports: [BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatSidenavModule, MatCardModule]
})
export class MaterialModule { }
