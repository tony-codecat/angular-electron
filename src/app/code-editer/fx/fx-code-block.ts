
export class CodeLanguage {
  lanName: string;
  lanVersion: string;
  lanOption?: any;
  lanUIOption?: any;
}

export enum TokenType {
  Space = 'SPACE',
  NewLine = 'NEW_LINE',
  Char = 'CHAR'
}

export interface IToken {
  reset(): void;
  getLenth(): number;
  getAllToken(): string;
}

export class Token implements IToken {
  protected code: string;
  protected tokenType: string;

  public constructor(code?: string) {
    code != null ? this.code = code : this.code = '';
  }

  public getAllToken(): string {
    return this.code;
  }

  public reset() {
    this.code = '';
  }

  public getLenth(): number {
    return this.code.length;
  }

  [Symbol.iterator] = () => {
    return {
      _index: 0,
      next: function () {
        if (this._index < this.getLenth()) {
          return {
            value: this.code[this._index++],
            done: false
          }
        } else {
          return { value: undefined, done: true }
        }
      },
      [Symbol.iterator]: () => {
        return this;
      }
    };
  }
}

export interface IDocPosition {
  row: number;
  column: number;
}

export interface IPosition {
  x: number;
  y: number;
}

export interface ICursor {
  setCursorDoc(doc: IFxCodeFile);
  getCursorDoc(): IFxCodeFile;
  getDocPosition(): IDocPosition;
  setDocPosition(docp: IDocPosition);
  getPosition(): IPosition;

  curUp(): IDocPosition;
  curDown(): IDocPosition;
  curLeft(): IDocPosition;
  curRight(): IDocPosition;
}

export class Cursor implements ICursor {

  setCursorDoc(doc: IFxCodeFile) {
    throw new Error("Method not implemented.");
  }
  getCursorDoc(): IFxCodeFile {
    throw new Error("Method not implemented.");
  }
  getDocPosition(): IDocPosition {
    throw new Error("Method not implemented.");
  }
  setDocPosition(docp: IDocPosition) {
    throw new Error("Method not implemented.");
  }
  getPosition(): IPosition {
    throw new Error("Method not implemented.");
  }
  curUp(): IDocPosition {
    throw new Error("Method not implemented.");
  }
  curDown(): IDocPosition {
    throw new Error("Method not implemented.");
  }
  curLeft(): IDocPosition {
    throw new Error("Method not implemented.");
  }
  curRight(): IDocPosition {
    throw new Error("Method not implemented.");
  }
  row: number;
  column: number;
}

export class FxCodeLine {
  code: string;
  constructor(code: string) {
    this.code = code;
  }

}

export interface TextStyle {
  fontSize: number;
  fontFamily: string;
  fontColor: string;
}

export interface CodeDocOption {
  textStyle: TextStyle;
}

export interface IFxCodeFile {

}

export class FxCodeFile implements IFxCodeFile {

  option: CodeDocOption;
  codeLine: Array<FxCodeLine>;

  constructor() {
    this.option = {
      textStyle: {
        fontSize: 20,
        fontFamily: 'Courier New',
        fontColor: '#DDD'
      }
    };
    this.codeLine = new Array<FxCodeLine>();

  }
}

export class CodeLine {
  code: string;
  enable: boolean;
  visiable: boolean;

  constructor(code: string = "", enable: boolean = true, visiable: boolean = true) {
    this.code = code;
    this.enable = enable;
    this.visiable = visiable;
  }
}




