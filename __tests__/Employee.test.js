const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Alex', 1, 'email@gmail.com');

  expect(employee.name).toBe('Alex');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('email@gmail.com');
})

test('gets employee name', () => {
  const employee = new Employee('Alex', 1, 'email@gmail.com');

  expect(employee.getName()).toBe('Alex');
})

test('gets employee ID', () => {
  const employee = new Employee('Alex', 1, 'email@gmail.com');

  expect(employee.getId()).toBe(1);
})

test('gets employee email', () => {
  const employee = new Employee('Alex', 1, 'email@gmail.com');

  expect(employee.getEmail()).toBe('email@gmail.com');
})

test('gets employee role', () => {
  const employee = new Employee('Alex', 1, 'email@gmail.com');

  expect(employee.getRole()).toBe('Employee');
})