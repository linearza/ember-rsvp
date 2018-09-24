import Helper from '@ember/component/helper';
import {
  A
} from '@ember/array';
import {
  set,
  get,
  observer
} from '@ember/object';

export default Helper.extend({

  arrayLengthObserver: observer('_array.[]', function() {
    this.recompute();
  }),

  compute([array, object]) {
    if (!array) {
      return;
    }
    let _array = get(this, '_array');
    if (array !== _array) {
      _array = new A(array);
      set(this, '_array', _array);
    }
    return _array.includes(object);
  }
});
