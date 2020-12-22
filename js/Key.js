/* eslint-disable import/extensions */
import create from './utils/create.js';

export default class Key {
  constructor({ small, shift, code, width = null }) {
    this.small = small;
    this.shift = shift;
    this.code = code;
    this.isFnKey = Boolean(
      small.match(/Ctrl|arr|Alt|Tab|Back|Del|Enter|Caps|Win|Shift|Space/)
    );

    if (shift && shift.match(/[^A-Za-zа-яА-ЯёЁ0-9]/)) {
      this.sub = create('div', 'sub', this.shift);
    } else {
      this.sub = create('div', 'sub', '');
    }

    this.letter = create('div', 'letter', small);
    if (width) {
      this.div = create(
        'div',
        `keyboard__key width-${width}`,
        [this.sub, this.letter],
        null,
        ['code', this.code],
        this.isFnKey ? ['fn', true] : ['fn', false]
      );
    } else {
      this.div = create(
        'div',
        'keyboard__key',
        [this.sub, this.letter],
        null,
        ['code', this.code],
        this.isFnKey ? ['fn', true] : ['fn', false]
      );
    }
  }
}
