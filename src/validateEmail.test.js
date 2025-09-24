'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it('should be declared', () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it('should return true for valid emails', () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
    expect(validateEmail('t@q.c')).toBeTruthy();
    expect(validateEmail('user.name_123@domain.com')).toBeTruthy();
    expect(validateEmail('a-b_c.d@sub.domain.com')).toBeTruthy();
  });

  it('should return false for invalid emails', () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
    expect(validateEmail('user@mail')).toBeFalsy();
    expect(validateEmail('user!@mail.com')).toBeFalsy();
    expect(validateEmail('user$@mail.com')).toBeFalsy();
    expect(validateEmail('.username@mail.com')).toBeFalsy();
    expect(validateEmail('username.@mail.com')).toBeFalsy();
    expect(validateEmail('user..name@mail.com')).toBeFalsy();
    expect(validateEmail('username@.mail.com')).toBeFalsy();
  });

  it('should return false for invalid domain chars', () => {
    expect(validateEmail('user@mail!.com')).toBeFalsy();
    expect(validateEmail('user@ma#il.com')).toBeFalsy();
  });
});
