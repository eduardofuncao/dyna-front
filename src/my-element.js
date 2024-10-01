import './app.css';

import { html, LitElement } from 'lit';

export class MyElement extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
      <button class="btn">Hello daisyUI</button>
      <p class="text-blue m-8 flex">esse é um teste do tailwind</p>
      <div class="text-blue">
        teste teste teste
      </div>
        <button class="btn w-64 rounded-full text-blue">Button</button>
      <div class="bg-blue w-8 h-8 rounded-full">
       asdfasdfasd 
      </div>
    `;
  }
}

window.customElements.define('my-element', MyElement);
