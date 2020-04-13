import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
//import * as ssh2 from 'ssh2';
import * as os from 'os';
//import * as pty from 'node-pty';
@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;
  //ssh2: typeof ssh2;
  os: typeof os;
  // pty: typeof pty;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    // Conditional imports
    /*if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;

      this.childProcess = window.require('child_process');

      this.os = window.require('os');
      this.pty = window.require('node-pty');

      this.fs = window.require('fs');
      this.ssh2 = window.require('ssh2').Client;

      console.log(this.os.platform());

      var conn = new ssh2.Client();
      conn
        .on('ready', function () {
          console.log('Client :: ready');
          conn.shell(
            function (err, stream) {
              if (err) throw err;
              stream
                .on('close', function () { console.log('Stream :: close'); conn.end(); })
                .on('data', function (data) { console.log('OUTPUT: ' + data); });

              stream.write('ll /\n');
              //stream.write('ssh admin@10.100.0.1\nexit\n');

              //stream
              //    .end('Closed!');
            });
        })
        .connect({
          host: '10.100.111.254',
          port: 22,
          username: 'root',
          password: '851212'
        })
        ;
    }*/
  }
}
