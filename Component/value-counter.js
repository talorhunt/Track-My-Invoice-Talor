import {
    LitElement,
    HTML
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class Component extends LitElement {
    static properties = {
        count: { type: Number },
        label: { type: String },
    }

    add() {
        this.count = this.count + 1;
    }

    remove() {
        this.count = this.count - 1;
    }

    render() {
        return HTML`
        <div>
            <button @click="${this.add}">-</button>
            ${this.label}: ${this.count}
            <button>+</button>
        </div> `; 
    }
}

customElements.define("value-counter", Component);