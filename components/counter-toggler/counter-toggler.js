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
        this._counterSlot = this.shadowRoot.querySelector('slot');

    }
    connectedCallback() {
        console.log("connectedCallback: CounterToggler");

        this._upButton = this.shadowRoot.querySelector('#up');
        this._downButton = this.shadowRoot.querySelector('#down');
        this._counterSlot.addEventListener('slotchange', e => {
            console.log("slotchange event on CounterToggler's slot");
        });

        this._upButton.addEventListener('click', this._upClick.bind(this));
        this._downButton.addEventListener('click', this._downClick.bind(this));
    }

    _upClick(event) {
        let bc = this.shadowRoot.querySelector( 'slot' ).assignedNodes()[1];
        let currentCounter = parseInt(bc.getAttribute("counter"));
        bc.setAttribute("counter", currentCounter+1);
    }

    _downClick(event) {
        let bc = this.shadowRoot.querySelector( 'slot' ).assignedNodes()[1];
        let currentCounter = parseInt(bc.getAttribute("counter"));
        bc.setAttribute("counter", currentCounter-1);
    }
}

customElements.define(CounterToggler.is, CounterToggler);