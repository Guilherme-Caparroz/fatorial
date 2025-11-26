const fatorial = require('./fatorial');

describe('Função fatorial', () => {
  test('fatorial de 1', () => {
    expect(fatorial(1)).toBe(1);
  });

  test('fatorial de 5', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('fatorial de 3', () => {
    expect(fatorial(3)).toBe(6);
  });

  test('fatorial de 9', () => {
    expect(fatorial(9)).toBe(362880);
  });
});
