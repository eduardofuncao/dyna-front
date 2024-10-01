import './app.css';
import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Display extends LitElement {

	static properties = {
		id: { state: true },
		words: {},
	};


	constructor() {
		super();
		this.id = 0;
		this.words = "placeholder text";
		this.intervalTimer;
	}
    

      createRenderRoot() {
        return this; // turn off shadow dom to access external styles
      }

	connectedCallback() {
		super.connectedCallback();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		clearInterval(this.intervalTimer);
		this.intervalTimer = undefined;
	}

	render() {
		const splitWords = this.words.split(" ");
		const word = splitWords[this.id];
		return html`
            <div class="flex justify-center items-center mt-48">
                <p class="countdown font-mono text-6xl block" id='word'>${word}</p>
                <button class="btn btn-primary" id="start-button" @click=${this.startInterval}>start</button>
                <button disabled="true" id='end-button' @click=${this.endInterval}>stop</button>
            </div>
        `;
	}

	tickToNextWord = () => {
        console.log(this.id);
		this.id += 1;
            if (this.id > this.words.split(" ").length-1) {
            this.id = 0;
        }
	};

	startInterval = () => {
        const ptag = this.querySelector('#word');
        ptag.style.color = "red";
        const startButton = this.querySelector('#start-button');
        const endButton = this.querySelector('#end-button');
        startButton.disabled = true;
        endButton.disabled = false;
		this.intervalTimer = setInterval(this.tickToNextWord, 175);
	};

	endInterval = () => {
        const startButton = this.shadowRoot.querySelector('#start-button');
        const endButton = this.shadowRoot.querySelector('#end-button');
        startButton.disabled = false;
        endButton.disabled = true;
        clearInterval(this.intervalTimer);
		this.intervalTimer = undefined;
	};
}
customElements.define("text-display", Display);
