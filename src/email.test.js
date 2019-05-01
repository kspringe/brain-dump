const fs = require('fs');
const validateEmail = require('./email');

test('banana@ucsc.edu', () => {
  expect(validateEmail('banana@ucsc.edu')).toBeTruthy();
});

test('sluggy@gmail.com', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeTruthy();
});

test('fake@email', () => {
    except(validateEmail('fake@email.com')).toBeFalsey();
});

test('@.', () => {
  expect(validateEmail('@.')).toBeFalsey();
});

test('https://drive.google.com/drive/u/0/folders/1XudpQ0YNN_leFxg05blxvMvW4i8yNb4j', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeFalsey();
});