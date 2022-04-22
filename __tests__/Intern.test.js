const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Alex', 1, 'email@gmail.com', 'CIM');

  expect(intern.name).toBe('Alex');
  expect(intern.id).toBe(1);
  expect(intern.email).toBe('email@gmail.com');
  expect(intern.school).toBe('CIM');
})

test('gets intern name', () => {
  const intern = new Intern('Alex', 1, 'email@gmail.com', 'CIM');

  expect(intern.getName()).toBe('Alex');
})

test('gets intern ID', () => {
  const intern = new Intern('Alex', 1, 'email@gmail.com', 'CIM');

  expect(intern.getId()).toBe(1);
})

test('gets intern email', () => {
  const intern = new Intern('Alex', 1, 'email@gmail.com', 'CIM');

  expect(intern.getEmail()).toBe('email@gmail.com');
})

test('gets intern school', () => {
  const intern = new Intern('Alex', 1, 'email@gmail.com', 'CIM');

  expect(intern.getSchool()).toBe('CIM');
})

test('gets intern role', () => {
  const intern = new Intern('Alex', 1, 'email@gmail.com', 'CIM');

  expect(intern.getRole()).toBe('Intern');
})