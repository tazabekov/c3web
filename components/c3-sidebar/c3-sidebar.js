const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <div>C3 Sidebar</div>
    <slot></slot>
  `;

export class C3Sidebar extends HTMLElement {
    static get is() { return "c3-sidebar" }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define(C3Sidebar.is, C3Sidebar);