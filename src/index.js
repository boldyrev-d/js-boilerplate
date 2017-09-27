import 'normalize.css';
import './index.css';
import Entry from './blocks/entry/entry';

// eslint-disable-next-line no-unused-vars
const entry = new Entry({
  el: document.querySelector('.js-entry'),
  template: '#entry-template',
  data: {
    title: 'FOO',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quaerat facere ducimus voluptatibus quis.',
  },
});
