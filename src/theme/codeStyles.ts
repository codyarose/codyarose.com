import { css } from 'styled-components'

export const codeStyles = css`
	code[class*='language-'],
	pre[class*='language-'] {
		color: #f92aad;
		text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
		background: none;
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		font-size: 1em;
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
		position: relative;
		padding: 2rem 1.5rem 1rem;
		margin: 0.5rem 0;
		overflow: auto;
		&::before {
			position: absolute;
			content: '';
			top: 0;
			left: 1.5rem;
			font-size: 0.9rem;
			line-height: 1;
			padding: 0.25rem 0.5rem;
			border-radius: 0 0 4px 4px;
			text-transform: uppercase;
			border-width: 1px;
			border-style: solid;
			border-color: currentColor;
			border-top: none;
			font-size: 1rem;
		}
	}
	pre[class*='language-ts']::before {
		content: 'ts';
	}
	pre[class='language-tsx']::before {
		content: 'tsx';
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background-color: transparent !important;
		background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
	}

	/* Inline code */
	:not(pre) > code[class*='language-'] {
		padding: 0.1em;
		border-radius: 0.3em;
		white-space: normal;
	}

	.token.comment,
	.token.block-comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #8e8e8e;
	}

	.token.punctuation {
		color: #ccc;
	}

	.token.tag,
	.token.attr-name,
	.token.namespace,
	.token.number,
	.token.unit,
	.token.hexcode,
	.token.deleted {
		color: #e2777a;
	}

	.token.property,
	.token.selector {
		color: #72f1b8;
		text-shadow: 0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475;
	}

	.token.function-name {
		color: #6196cc;
	}

	.token.boolean,
	.token.selector .token.id,
	.token.function {
		color: #fdfdfd;
		text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975,
			0 0 8px #03edf975;
	}

	.token.class-name {
		color: #fc5e;
		text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75,
			0 0 25px #fc1f2c75;
		font-weight: bold;
	}

	.token.constant,
	.token.symbol {
		color: #f92aad;
		text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
	}

	.token.important,
	.token.atrule,
	.token.keyword,
	.token.selector .token.class,
	.token.builtin {
		color: #f4eee4;
		text-shadow: 0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575;
	}

	.token.builtin {
		color: #fc5e;
	}

	.token.string,
	.token.char,
	.token.attr-value,
	.token.regex,
	.token.variable {
		color: #f87c32;
	}

	.token.operator,
	.token.entity,
	.token.url {
		color: #67cdcc;
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}

	.token.entity {
		cursor: help;
	}

	.token.inserted {
		color: green;
	}

	/* Line Numbers */
	pre[class*='language-'].line-numbers {
		position: relative;
		padding-left: 2.5rem;
		counter-reset: linenumber;
	}

	pre[class*='language-'].line-numbers > code {
		position: relative;
		white-space: inherit;
	}

	.line-numbers .line-numbers-rows {
		position: absolute;
		pointer-events: none;
		top: 2rem;
		font-size: 100%;
		padding-left: 0.5rem;
		left: -3.8rem;
		width: 3em; /* works for line-numbers below 1000 lines */
		letter-spacing: -1px;

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.line-numbers-rows > span {
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
`
