const template = document.createElement('template');
template.innerHTML = `
    <div id="binary">i am binary counter!</div>
  `;

export class BinaryCounter extends HTMLElement {
    static get is() { return "binary-counter" }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._one = "\u0031\u20E3";
        this._zero = "\u0030\u20E3";
    }

    static get observedAttributes() { return ["counter"]; }
    attributeChangedCallback(a, o, n){ if(n!==o){ this[a] = n;}}

    get counter() { return this._counter; }
    set counter(value) {
        if (value != this._counter) {
            this._counter = parseInt(value);
            this.setAttribute("counter", this._counter);

            var binary = this._counter.toString(2).replace(/1/g, this._one).replace(/0/g, this._zero);
            this.shadowRoot.querySelector("#binary").innerHTML = binary;
        }
    }

}

customElements.define(BinaryCounter.is, BinaryCounter);