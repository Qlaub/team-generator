const Manager = require('../lib/Manager');

test('creates an manager object', () => {
  const manager = new Manager('Alex', 1, 'email@gmail.com', 1);

  expect(manager.name).toBe('Alex');
  expect(manager.id).toBe(1);
  expect(manager.email).toBe('email@gmail.com');
  expect(manager.officeNumber).toBe(1);
})

test('gets manager name', () => {
  const manager = new Manager('Alex', 1, 'email@gmail.com', 1);

  expect(manager.getName()).toBe('Alex');
})

test('gets manager ID', () => {
  const manager = new Manager('Alex', 1, 'email@gmail.com', 1);

  expect(manager.getId()).toBe(1);
})

test('gets manager email', () => {
  const manager = new Manager('Alex', 1, 'email@gmail.com', 1);

  expect(manager.getEmail()).toBe('email@gmail.com');
})

test('gets manager role', () => {
  const manager = new Manager('Alex', 1, 'email@gmail.com', 1);

  expect(manager.getRole()).toBe('Manager');
})