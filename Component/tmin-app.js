import {
    LitElement,
    HTML
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class Component extends LitElement {
    render() {
        return HTML`
        <div>
            <value-counter label="cookies" count="3"></value-counter>
        </div>
        `; 
    }
}

customElements.define("tmin-app", Component);