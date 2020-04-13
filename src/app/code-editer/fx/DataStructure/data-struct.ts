import { UUID } from "../utils";
import { identifierModuleUrl } from "@angular/compiler";

export interface ICopy<T> {
  copy(): T;
}
export interface IEqual<T> {
  equals(node: T): boolean;
}
export interface IIdentify<T> {
  getID(): T;
}
export interface IDoublyNode<T extends ICopy<T>> extends ICopy<T>, IEqual<T>, IIdentify<number> {

  getHead(): IDoublyNode<T>;
  getTail(): IDoublyNode<T>;
  getFirstNode(): IDoublyNode<T>;
  getLastNode(): IDoublyNode<T>;

  addHeadNode(head: IDoublyNode<T>);
  addTailNode(tail: IDoublyNode<T>);
  cutHeadNode(): IDoublyNode<T>;
  cutTailNode(): IDoublyNode<T>;

  getNodeAt(order:number): IDoublyNode<T>;
}

export class DoublyNode<T extends ICopy<T>> implements IDoublyNode<DoublyNode<T>>{

  protected head: DoublyNode<T> | undefined;
  protected tail: DoublyNode<T> | undefined;
  protected data: T;
  id: number;
  protected constructor() {

  }
  getHead(): IDoublyNode<DoublyNode<T>> {
    throw new Error("Method not implemented.");
  }
  getTail(): IDoublyNode<DoublyNode<T>> {
    throw new Error("Method not implemented.");
  }
  getFirstNode(): IDoublyNode<DoublyNode<T>> {
    throw new Error("Method not implemented.");
  }
  getLastNode(): IDoublyNode<DoublyNode<T>> {
    throw new Error("Method not implemented.");
  }
  addHeadNode(head: IDoublyNode<DoublyNode<T>>) {
    throw new Error("Method not implemented.");
  }
  addTailNode(tail: IDoublyNode<DoublyNode<T>>) {
    throw new Error("Method not implemented.");
  }
  cutHeadNode(): IDoublyNode<DoublyNode<T>> {
    throw new Error("Method not implemented.");
  }
  cutTailNode(): IDoublyNode<DoublyNode<T>> {
    throw new Error("Method not implemented.");
  }
  getNodeAt(order: number): IDoublyNode<DoublyNode<T>> {
    throw new Error("Method not implemented.");
  }




  getID(): number {
    return this.id;
  }
  equals(node: DoublyNode<T>): boolean {
    return this.getID() === node.getID();
  }
  copy(): DoublyNode<T> {
    return DoublyNode.NodeFactory();
  }
  static NodeFactory<T extends ICopy<T>>(data?: T): DoublyNode<T> {
    let node = new DoublyNode<T>();
    node.id = UUID();
    node.data = data;
    return node;
  }
}

