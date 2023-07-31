import '@lion/ui/define/lion-calendar.js';
import '@lion/ui/define/lion-accordion.js';
import { LitElement, html } from 'lit';

import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-accordion.js';


class MyLionApp extends LitElement {

  render() {
    return html`
      <div style="text-align: center; margin: 0 auto; max-width: 700px">
        <h1>A Web App made with lion</h1>

        <lion-button>Default</lion-button>
        <lion-accordion>
          <h3 slot="invoker">
            <button>Nutritional value</button>
          </h3>
          <p slot="content">
            Orange flesh is 87% water, 12% carbohydrates, 1% protein, and contains negligible fat (table).
            In a 100 gram reference amount, orange flesh provides 47 calories, and is a rich source of
            vitamin C, providing 64% of the Daily Value. No other micronutrients are present in significant
            amounts (table).
          </p>
        </lion-accordion>
        <lion-calendar></lion-calendar>
      </div>
    `;
  }
}
customElements.define('my-lion-app', MyLionApp);
