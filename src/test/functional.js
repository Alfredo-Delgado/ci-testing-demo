import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('ci-testing-demo functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('ci-testing-demo main page shows up', function() {
  F('title').text('ci-testing-demo', 'Title is set');
});
