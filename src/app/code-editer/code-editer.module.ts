import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeFileComponent } from './code-file/code-file.component';
import { CodeLineComponent } from './code-line/code-line.component';


@NgModule({
  providers: [],
  declarations: [CodeFileComponent, CodeLineComponent],
  imports: [
    CommonModule
  ],
  exports: [CodeFileComponent, CodeLineComponent]
})
export class CodeEditerModule { }

