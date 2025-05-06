import Character from '../character';

test('ошибка при неверном типе', () => {
  expect(() => new Character('Big', 'Big')).toThrow('Неверный тип');
});
