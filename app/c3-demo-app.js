import { C3App } from "../components/c3-app/c3-app.js";
import { C3Sidebar } from "../components/c3-sidebar/c3-sidebar.js";
import { BinaryCounter } from "../components/binary-counter/binary-counter.js";
import { CounterToggler } from "../components/counter-toggler/counter-toggler.js";


const template = document.createElement('template');
template.innerHTML = `
    <h3>C3 Demo app:</h3>
    <slot></slot>
  `;

export class C3DemoApp extends C3App {
    static get is() { return "c3-demo-app"; }
    constructor(){
        super({template});
    }
}

customElements.define(C3DemoApp.is, C3DemoApp);