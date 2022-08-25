const Manager = require('../lib/Manager');

// create manager object
test('creates an manager', () => {
    const manager = new Manager (21, 'Andrew', 'andrew@gmail.com', 8);

    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getName()).toBe('Andrew');
    expect(manager.getEmail()).toBe('andrew@gmail.com');
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

// get id from getId()
test('get manager id', () => {
    const manager = new Manager (21, 'Andrew', 'andrew@gmail.com', 8);

    expect(manager.getId()).toEqual(expect.any(Number));
});

// get name from getName()
test('get manager name', () => {
    const manager = new Manager (21, 'Andrew', 'andrew@gmail.com', 8);

    expect(manager.getName()).toEqual(expect.any(String));
});

// get email from getEmail()
test('get manager email', () => {
    const manager = new Manager (21, 'Andrew', 'andrew@gmail.com', 8);

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test("get manager's office number", () => {
    const manager = new Manager (21, 'Andrew', 'andrew@gmail.com', 8);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

// get role from getRole()
test("get individual's role", () => {
    const manager = new Manager (21, 'Andrew', 'andrew@gmail.com', 8);

    expect(manager.getRole()).toEqual('Manager');
});