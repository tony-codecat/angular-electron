import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalPageComponent } from './terminal-page/terminal-page.component';

import { NgTerminalModule } from 'ng-terminal';
import { CoreModule} from '../core/core.module'

@NgModule({
  declarations: [TerminalPageComponent],
  exports:[TerminalPageComponent],
  imports: [
    CommonModule,
    NgTerminalModule,
    CoreModule
  ]
})
export class TerminalModule { }
