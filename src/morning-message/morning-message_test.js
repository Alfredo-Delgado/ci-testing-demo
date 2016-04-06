import QUnit from 'steal-qunit';
import { ViewModel } from './morning-message';

// ViewModel unit tests
QUnit.module('ci-testing-demo/morning-message');

QUnit.test('if no name is provided then give a formal greeting', assert => {
  var vm = new ViewModel();
  assert.equal(vm.attr('message'), 'おはようございます');
});

QUnit.test('if a name is provided then give an informal greeting', assert => {
  var vm = new ViewModel({
    name: 'Tom'
  });
  assert.equal(vm.attr('message'), 'おはよう, Tom');
});
