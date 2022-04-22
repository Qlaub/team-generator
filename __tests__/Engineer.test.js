const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Alex', 1, 'email@gmail.com', 'Qlaub');

  expect(engineer.name).toBe('Alex');
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe('email@gmail.com');
  expect(engineer.github).toBe('Qlaub');
})

test('gets engineer name', () => {
  const engineer = new Engineer('Alex', 1, 'email@gmail.com', 'Qlaub');

  expect(engineer.getName()).toBe('Alex');
})

test('gets engineer ID', () => {
  const engineer = new Engineer('Alex', 1, 'email@gmail.com', 'Qlaub');

  expect(engineer.getId()).toBe(1);
})

test('gets engineer email', () => {
  const engineer = new Engineer('Alex', 1, 'email@gmail.com', 'Qlaub');

  expect(engineer.getEmail()).toBe('email@gmail.com');
})

test('gets engineer github', () => {
  const engineer = new Engineer('Alex', 1, 'email@gmail.com', 'Qlaub');

  expect(engineer.getGithub()).toBe('Qlaub');
})

test('gets engineer role', () => {
  const engineer = new Engineer('Alex', 1, 'email@gmail.com', 'Qlaub');

  expect(engineer.getRole()).toBe('Engineer');
})