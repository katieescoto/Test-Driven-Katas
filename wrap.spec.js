const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns string in one line if total characters less than column input', () => {
    expect(wrap("Hello World", 20)).to.equal("Hello World");
  });
});
