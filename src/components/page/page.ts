import { BaseComponent, Component } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  constructor() {
    super(`<li class="page_item">
            <section class="page-item__body"></section>
            <button class="close">&times;</button>
          </li>`);
  }
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super('<ul class="page"></ul>')
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
  }
}