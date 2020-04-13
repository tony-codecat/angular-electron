import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { ElectronService } from '../../core/services';
import { Observable, Subject ,fromEvent} from "rxjs";
@Component({
  selector: 'app-terminal-page',
  templateUrl: './terminal-page.component.html',
  styleUrls: ['./terminal-page.component.css']
})
export class TerminalPageComponent implements AfterViewInit {
  @ViewChild('term', { static: true }) child: NgTerminal;
  term: any;
  writeSubject: Observable<string>;


  constructor(private els: ElectronService) {

    this.term = this.els.pty.spawn('zsh', [], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.env.HOME,
      env: process.env
    });
    this.term.resize(80, 30);
    this.term.on('data', function (data:string) {
      console.log(data);
    });
    this.writeSubject=fromEvent(this.term, 'data');
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {


    this.child.keyEventInput.subscribe(e => {
      console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);

      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        //this.child.write('\r\n$ ');
        this.term.write('\r');
      } else if (ev.keyCode === 8) {
        // Do not delete the prompt
        //if (this.child.underlying.buffer. > 2) {
          //this.child.write('\b \b');
          this.term.write('\b \b');
        //}
      } else if (printable) {
        //this.child.write(e.key);
        this.term.write(e.key);
      }else {
        // this.term.write('\n\x1b[G');
        this.term.write('\x1b[2J');

      }
    })
  }
}
