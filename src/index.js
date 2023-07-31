import { LitElement, html } from 'lit';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';

import { Required } from '@lion/ui/form-core.js';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';

loadDefaultFeedbackMessages();

class MyLionApp extends LitElement {

  __submitHandler = ev => {
    if (ev.target.hasFeedbackFor.includes('error')) {
      const firstFormElWithError = ev.target.formElements.find(el =>
        el.hasFeedbackFor.includes('error'),
      );
      firstFormElWithError.focus();
      return;
    }
    const formData = ev.target.serializedValue;
    console.log(formData);
    fetch('/api/foo/', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  };
  __submitViaJS = ev => {
    // Call submit on the lion-form element, in your own code you should use
    // a selector that's not dependent on DOM structure like this one.
    ev.target.previousElementSibling.submit();
  };
  render() {
    return html`
    <lion-form @submit=${this.__submitHandler}>
      <form @submit=${ev => ev.preventDefault()}>
        <lion-input
          name="firstName"
          label="First Name"
          .validators="${[new Required()]}"
        ></lion-input>
        <lion-input
          name="lastName"
          label="Last Name"
          .validators="${[new Required()]}"
        ></lion-input>
        <div style="display:flex">
          <button>Submit</button>
          <button
            type="button"
            @click=${ev => ev.currentTarget.parentElement.parentElement.parentElement.resetGroup()}
          >
            Reset
          </button>
        </div>
      </form>
    </lion-form>
    <button @click=${this.__submitViaJS}>Explicit submit via JavaScript</button>
  `;
  }

}
customElements.define('my-lion-app', MyLionApp);
