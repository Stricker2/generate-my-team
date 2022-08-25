const Employee = require('../lib/Employee');

// create employee object
test('creates an employee', () => {
    const employee = new Employee (21, 'Andrew', 'andrew@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getName()).toBe('Andrew');
    expect(employee.getEmail()).toBe('andrew@gmail.com');
});

// get id from getId()
test('get employee id', () => {
    const employee = new Employee(21, 'Andrew', 'andrew@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get name from getName()
test('get employee name', () => {
    const employee = new Employee(21, 'Andrew', 'andrew@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// get email from getEmail()
test('get employee email', () => {
    const employee = new Employee(21, 'Andrew', 'andrew@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// get role from getRole()
test("get individual's role", () => {
    const employee = new Employee(21, 'Andrew', 'andrew@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});