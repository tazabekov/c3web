const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }
        .bit {
            display: inline-block;
            width: 16px;
        }
        .representation {
            display: inline-block;
        }
    </style>
    <div id="decimal" class="representation"></div>
    <div id="binary"  class="representation"></div>
  `;

export class BinaryCounter extends HTMLElement {
    static get is() { return "binary-counter" }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._zero = "\u0030\u20E3";
        this._one = "\u0031\u20E3";
    }

    static get observedAttributes() { return ["counter"]; }
    attributeChangedCallback(a, o, n){ if(n!==o){ this[a] = n;}}

    get counter() { return this._counter; }
    set counter(value) {
        if (value != this._counter) {
            this._counter = parseInt(value);
            this.setAttribute("counter", this._counter);

            let binary = this._counter.toString(2).replace(/1/g, "<span class='bit'>"+this._one+"</span>").replace(/0/g, "<span class='bit'>"+this._zero+"</span>");
            this.shadowRoot.querySelector("#binary").innerHTML = binary;
            this.shadowRoot.querySelector("#decimal").innerHTML = "("+this._counter+")";
        }
    }

}

customElements.define(BinaryCounter.is, BinaryCounter);