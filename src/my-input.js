import { css } from 'lit';
import { LionInput } from '@lion/ui/input.js';

class MyInput extends LionInput {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          /* your styles here */
          border: 2px solid red;
        }
      `,
    ];
  }
}
customElements.define('my-input', MyInput);
