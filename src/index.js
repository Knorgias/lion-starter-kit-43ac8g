import './my-input';
import '@lion/ui/define/lion-calendar.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-accordion.js';
import { LitElement, html } from 'lit';

class MyLionApp extends LitElement {
  render() {
    return html`
      <div style="text-align: center; margin: 0 auto; max-width: 700px">
        <h1>A Web App made with lion</h1>
        <h1>Another title</h1>
        <accordion>An accordion</accordion>
        <button>Lion Button</button>
        <h1>Another title</h1>
        <h1>Another title</h1>
        <h1>Another title</h1>
        <h1>Another title</h1>
        <my-input></my-input>
        <lion-calendar></lion-calendar>
      </div>
    `;
  }
}
customElements.define('my-lion-app', MyLionApp);
