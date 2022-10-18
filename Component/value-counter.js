import {
    LitElement,
    HTML,
    css,
    classMap
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

class Component extends LitElement {
    static properties = {
        count: { type: Number },
        label: { type: String },
    };

    static styles = css`
        span {
        color: black;
        }

        span.error {
            color: red;
        }

         span.great {
             color: green;
         }
    `;

    add() {
        this.count = this.count + 1;
    }

    remove() {
        this.count = this.count - 1;
    }

    render () {
        const valueStyle = classMap ({
            error: this.count < 0,
            great: this.count >= 10,
        })
    }

    render() {
        return HTML`
        <div>
            <button @click="${this.remove}">-</button>
            <span class="${valueStyle}">${this.label}: ${this.count}</span>
            <button @click="${this.add}">+</button>
        </div> 
        `; 
    }
}

customElements.define("value-counter", Component);