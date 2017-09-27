import './entry.css';
import templateEngine from '../../libs/templateEngine';

export default class Entry {
  constructor(opts) {
    this.el = opts.el;
    this._template = document.querySelector(opts.template).innerHTML;
    this.data = opts.data;

    this.render();
  }

  render() {
    this.el.innerHTML = templateEngine(this._template, this.data);
  }
}
