const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <button id="up">UP</button>
    <button id="down">down</button>
    <slot></slot>
  `;

export class CounterToggler extends HTMLElement {
    static get is() { return "counter-toggler" }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#up')
            .addEventListener('click', this._upClick.bind(this));

        this.shadowRoot.querySelector('#down')
            .addEventListener('click', this._downClick.bind(this));
    }

    _upClick() {
        let bc = this.querySelector("binary-counter");
        let currentCounter = parseInt(bc.getAttribute("counter"));
        bc.setAttribute("counter", currentCounter+1);
    }

    _downClick() {
        let bc = this.shadowRoot.querySelector( 'slot' ).assignedNodes()[1];
        let currentCounter = parseInt(bc.getAttribute("counter"));
        bc.setAttribute("counter", currentCounter-1);
    }
}

customElements.define(CounterToggler.is, CounterToggler);