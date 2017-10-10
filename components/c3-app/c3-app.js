const template = document.createElement('template');
template.innerHTML = `<h3>C3 App</h3><slot></slot>`;

export class C3App extends HTMLElement {
    static get is() { return "c3-app"; }
    constructor(c){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild((c && c.template || template).content.cloneNode(true));

        if (this.querySelector('c3-sidebar')) {
            this.classList.add("c3-sidebar")
        }
    }
}

customElements.define(C3App.is, C3App);