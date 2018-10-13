import Component from '@ember/component';

export default Component.extend({
  classNames: ['music-toggle'],

  musicEnabled: false,

  click() {
    this.toggleProperty('musicEnabled');
  }
});
