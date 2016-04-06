import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './morning-message.less!';
import template from './morning-message.stache!';

export const ViewModel = Map.extend({
  define: {
    name: {
      value: ''
    },
    message: {
      get() {
        let name = this.attr('name');

        return name ? `おはよう, ${name}` : 'おはようございます';
      }
    }
  }
});

export default Component.extend({
  tag: 'morning-message',
  viewModel: ViewModel,
  template
});
