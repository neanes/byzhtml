import { CssVars } from '../../util/CssVars.js';

export class Melisma extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'right', 'top', 'height', 'border'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const parentNote = this.closest('x-note, x-n');

    if (parentNote) {
      this.slot = 'melisma';
    }

    this.updateStyle();
  }

  attributeChangedCallback() {
    this.updateStyle();
  }

  updateStyle() {
    let width = '';
    let paddingLeft = '';
    let top = '';
    let height = '';
    let borderBottom = '';

    if (this.hasAttribute('width')) {
      width = `width: ${this.getAttribute('width')};`;
    }

    if (this.hasAttribute('right')) {
      paddingLeft = `padding-left: ${this.getAttribute('right')};`;
    }

    if (this.hasAttribute('border') && this.hasAttribute('top')) {
      top = `transform: translateY(${this.getAttribute('top')});`;
    }

    if (this.hasAttribute('border') && this.hasAttribute('height')) {
      height = `height: ${this.getAttribute('height')};`;
    }

    if (this.hasAttribute('border')) {
      borderBottom = `border-bottom: 1px solid currentColor;`;
    }

    // Border-based melismas need a small extra horizontal nudge so the line
    // starts cleanly against the lyric offset instead of tucking under it.
    const marginLeft = this.hasAttribute('border')
      ? `calc(-1* var(--byz-lyric-offset-h) + 2px)`
      : `calc(-1* var(--byz-lyric-offset-h))`;

    this.shadowRoot.innerHTML = `
    <style>
        .melisma {
          position: absolute;
        display: inline-flex;
        overflow: hidden!important;
        white-space: pre;
        font-family: var(${CssVars.LyricFontFamily});
        font-size: var(${CssVars.LyricFontSize});
        margin-left: ${marginLeft};
        ${width}
        ${paddingLeft}
        ${borderBottom}
        ${top}
        ${height}
      }
    </style>
    <span class="melisma"><slot></slot></span>`;
  }
}
