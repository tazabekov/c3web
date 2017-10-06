import { BinaryCounter } from "../components/binary-counter/binary-counter.js";
import { CounterToggler } from "../components/counter-toggler/counter-toggler.js";

const template = document.createElement('template');
template.innerHTML = `
    <h1>C3 Demo app:</h1>
    <counter-toggler>
        <binary-counter counter="2"></binary-counter>
    </counter-toggler>
    more binary togglers:
    <counter-toggler>
        <binary-counter counter="2"></binary-counter>
    </counter-toggler>
  `;

export class C3DemoApp extends HTMLElement {
    static get is() { return "c3-demo-app"; }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define(C3DemoApp.is, C3DemoApp);