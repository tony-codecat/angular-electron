import { FxCodeLine } from '../fx/fx-code-block';
import { Component, Input, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'g[app-code-line]',
  templateUrl: './code-line.component.html',
  styleUrls: ['./code-line.component.css']
})
export class CodeLineComponent implements OnInit {

  @Input()
  lineCode: FxCodeLine;
  @Input()
  lineNum: number;
  @ViewChild('code', { static: true })
  htmlcode: ElementRef;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2) {

  }

  ngOnInit(): void {


  }

  showSelectedText() {
    var text = "";
    if (window.getSelection()) {
      text = window.getSelection().toString();
    } else if (window.getSelection() && window.getSelection().type != "Control") {
      text = document.createRange().toString();
    }


    document.createRange().selectNode(this.htmlcode.nativeElement);

    let node = this.htmlcode.nativeElement.firstChild;
    var range = document.createRange();
    let idx=2;
    range.setStart(node, idx);
    range.setEnd(node, idx+1);
    var selection = window.getSelection();
    selection.removeAllRanges();
    //selection.addRange(range);

    console.log(range.getBoundingClientRect());

  }

}
