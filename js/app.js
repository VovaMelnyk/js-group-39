const icon = {
  _color: '#fff',
  _size: '24px',
  _padding: '16px',
  color(newColor) {
    this._color = newColor;
    return this;
  },
  size(newSize) {
    this._size = newSize;
    return this;
  },
  padding(newP) {
    this._padding = newP;
    return this;
  },
};

// icon._color = 'red';
// icon._size = '30px';
// icon._padding = '24px';

icon.color('blue').size('40px').padding('60px');
console.log(icon);

icon.size('400px').padding('600px');
console.log(icon);
