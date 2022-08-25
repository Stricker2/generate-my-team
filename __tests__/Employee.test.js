const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee (21, 'Andrew', 'andrew@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getName()).toBe('Andrew');
    expect(employee.getEmail()).toBe('andrew@gmail.com');
});