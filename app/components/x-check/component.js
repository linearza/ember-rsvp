import Component from '@ember/component';

export default Component.extend({
  tagName: 'label',
  classNames: ['x-check'],

  name: null,
  checked: null,
  onChange: null,
  disabled: false,

  actions: {
    onChange(e) {
      this.set('checked', e.target.checked);
      if (this.get('onChange')) {
        this.get('onChange')();
      }
    }
  }

});
