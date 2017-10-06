import {BinaryCounter} from "../components/binary-counter/binary-counter.js";

const template = document.createElement('template');
template.innerHTML = `
    <h1>C3 Demo app:</h1>
    <binary-counter counter="2"></binary-counter>
    <slot></slot>
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