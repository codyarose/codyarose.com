import { css } from 'styled-components'

export const codeStyles = css`
	:root {
		--dracula-background: #282a36;
		--dracula-comment: #6272a4;
		--dracula-foreground: #f8f8f2;
		--dracula-selection: #44475a;

		--dracula-cyan: #8be9fd;
		--dracula-green: #50fa7b;
		--dracula-orange: #ffb86c;
		--dracula-pink: #ff79c6;
		--dracula-purple: #bd93f9;
		--dracula-red: #ff5555;
		--dracula-yellow: #f1fa8c;
	}

	pre::-webkit-scrollbar {
		width: 14px;
	}

	pre::-webkit-scrollbar-track {
		background-color: var(--dracula-comment);
		border-radius: 0px;
	}

	pre::-webkit-scrollbar-thumb {
		background-color: var(--dracula-purple);
		border-radius: 0px;
	}

	/* Selection */

	pre[class*='language-']::-moz-selection,
	pre[class*='language-'] ::-moz-selection,
	code[class*='language-']::-moz-selection,
	code[class*='language-'] ::-moz-selection {
		text-shadow: none;
		background-color: var(--dracula-selection);
	}

	pre[class*='language-']::selection,
	pre[class*='language-'] ::selection,
	code[class*='language-']::selection,
	code[class*='language-'] ::selection {
		text-shadow: none;
		background-color: var(--dracula-selection);
	}

	/* Line numbers */

	pre.line-numbers {
		position: relative;
		padding-left: 3.8em;
		counter-reset: linenumber;
	}

	pre.line-numbers > code {
		position: relative;
		white-space: inherit;
	}

	.line-numbers .line-numbers-rows {
		position: absolute;
		pointer-events: none;
		top: 0;
		font-size: 100%;
		left: -3.8em;
		width: 3em; /* works for line-numbers below 1000 lines */
		letter-spacing: -1px;
		border-right: 1px solid #999;

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.line-numbers-rows > span {
		pointer-events: none;
		display: block;
		counter-increment: linenumber;
	}

	.line-numbers-rows > span:before {
		content: counter(linenumber);
		color: #999;
		display: block;
		padding-right: 0.8em;
		text-align: right;
	}

	/* Toolbar for copying */

	div.code-toolbar {
		position: relative;
	}

	div.code-toolbar > .toolbar {
		position: absolute;
		top: 0.3em;
		right: 0.2em;
		transition: opacity 0.3s ease-in-out;
		opacity: 0;
	}

	div.code-toolbar:hover > .toolbar {
		opacity: 1;
	}

	div.code-toolbar > .toolbar .toolbar-item {
		display: inline-block;
		padding-right: 20px;
	}

	div.code-toolbar > .toolbar a {
		cursor: pointer;
	}

	div.code-toolbar > .toolbar button {
		background: none;
		border: 0;
		color: inherit;
		font: inherit;
		line-height: normal;
		overflow: visible;
		padding: 0;
		-webkit-user-select: none; /* for button */
		-moz-user-select: none;
		-ms-user-select: none;
	}

	div.code-toolbar > .toolbar a,
	div.code-toolbar > .toolbar button,
	div.code-toolbar > .toolbar span {
		color: var(--dracula-foreground);
		font-size: 0.8em;
		padding: 0.5em;
		background: var(--dracula-comment);
		border-radius: 0.5em;
	}

	div.code-toolbar > .toolbar a:hover,
	div.code-toolbar > .toolbar a:focus,
	div.code-toolbar > .toolbar button:hover,
	div.code-toolbar > .toolbar button:focus,
	div.code-toolbar > .toolbar span:hover,
	div.code-toolbar > .toolbar span:focus {
		color: inherit;
		text-decoration: none;
		background-color: var(--dracula-green);
	}

	/* Remove text shadow for printing */

	@media print {
		code[class*='language-'],
		pre[class*='language-'] {
			text-shadow: none;
		}
	}

	code[class*='language-'],
	pre[class*='language-'] {
		color: var(--dracula-foreground);
		background: var(--dracula-background);
		text-shadow: none;
		font-family: PT Mono, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
			monospace;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.5;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	/* Code blocks */

	pre[class*='language-'] {
		background: var(--dracula-background);
		border-radius: 0.5em;
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
		height: auto;
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background: var(--dracula-background);
	}

	/* Inline code */
	:not(pre) > code[class*='language-'] {
		padding: 4px 7px;
		border-radius: 0.3em;
		white-space: normal;
	}

	/* Code box limit */

	.limit-300 {
		height: 300px !important;
	}

	.limit-400 {
		height: 400px !important;
	}

	.limit-500 {
		height: 500px !important;
	}

	.limit-600 {
		height: 600px !important;
	}

	.limit-700 {
		height: 700px !important;
	}

	.limit-800 {
		height: 800px !important;
	}

	.language-css {
		color: var(--dracula-purple);
	}

	.token {
		color: var(--dracula-pink);
	}

	.language-css .token {
		color: var(--dracula-pink);
	}

	.token.script {
		color: var(--dracula-foreground);
	}

	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}

	.token.atrule,
	.token.attr-name,
	.token.attr-value {
		color: var(--dracula-green);
	}

	.language-css .token.atrule {
		color: var(--dracula-purple);
	}

	.language-html .token.attr-value,
	.language-markup .token.attr-value {
		color: var(--dracula-yellow);
	}

	.token.boolean {
		color: var(--dracula-purple);
	}

	.token.builtin,
	.token.class-name {
		color: var(--dracula-cyan);
	}

	.token.comment {
		color: var(--dracula-comment);
	}

	.token.constant {
		color: var(--dracula-purple);
	}

	.language-javascript .token.constant {
		color: var(--dracula-orange);
		font-style: italic;
	}

	.token.entity {
		color: var(--dracula-pink);
	}

	.language-css .token.entity {
		color: var(--dracula-green);
	}

	.language-html .token.entity.named-entity {
		color: var(--dracula-purple);
	}

	.language-html .token.entity:not(.named-entity) {
		color: var(--dracula-pink);
	}

	.language-markup .token.entity.named-entity {
		color: var(--dracula-purple);
	}

	.language-markup .token.entity:not(.named-entity) {
		color: var(--dracula-pink);
	}

	.token.function {
		color: var(--dracula-green);
	}

	.language-css .token.function {
		color: var(--dracula-cyan);
	}

	.token.important,
	.token.keyword {
		color: var(--dracula-pink);
	}

	.token.prolog {
		color: var(--dracula-foreground);
	}

	.token.property {
		color: var(--dracula-orange);
	}

	.language-css .token.property {
		color: var(--dracula-cyan);
	}

	.token.punctuation {
		color: var(--dracula-pink);
	}

	.language-css .token.punctuation {
		color: var(--dracula-orange);
	}

	.language-html .token.punctuation,
	.language-markup .token.punctuation {
		color: var(--dracula-foreground);
	}

	.token.selector {
		color: var(--dracula-pink);
	}

	.language-css .token.selector {
		color: var(--dracula-green);
	}

	.token.regex {
		color: var(--dracula-red);
	}

	.language-css .token.rule:not(.atrule) {
		color: var(--dracula-foreground);
	}

	.token.string {
		color: var(--dracula-yellow);
	}

	.token.tag {
		color: var(--dracula-pink);
	}

	.token.url {
		color: var(--dracula-cyan);
	}

	.language-css .token.url {
		color: var(--dracula-orange);
	}

	.token.variable {
		color: var(--dracula-comment);
	}

	.token.number {
		color: rgba(189, 147, 249, 1);
	}

	.token.operator {
		color: rgba(139, 233, 253, 1);
	}

	.token.char {
		color: rgba(255, 135, 157, 1);
	}

	.token.symbol {
		color: rgba(255, 184, 108, 1);
	}

	.token.deleted {
		color: #e2777a;
	}

	.token.namespace {
		color: #e2777a;
	}
`
