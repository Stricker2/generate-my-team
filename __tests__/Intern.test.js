const Intern = require('../lib/Intern');

// create intern object
test('creates an intern', () => {
    const intern = new Intern (21, 'Andrew', 'andrew@gmail.com', 'PC');

    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getName()).toBe('Andrew');
    expect(intern.getEmail()).toBe('andrew@gmail.com');
    expect(intern.getSchool()).toBe('PC');
});

// get id from getId()
test('get intern id', () => {
    const intern = new Intern (21, 'Andrew', 'andrew@gmail.com', 'PC');

    expect(intern.getId()).toEqual(expect.any(Number));
});

// get name from getName()
test('get intern name', () => {
    const intern = new Intern (21, 'Andrew', 'andrew@gmail.com', 'PC');

    expect(intern.getName()).toEqual(expect.any(String));
});

// get email from getEmail()
test('get intern email', () => {
    const intern = new Intern (21, 'Andrew', 'andrew@gmail.com', 'PC');

    expect(intern.getEmail()).toEqual(expect.any(String));
});

test("get intern's school", () => {
    const intern = new Intern (21, 'Andrew', 'andrew@gmail.com', 'PC');

    expect(intern.getSchool()).toEqual(intern.school.toString());
})

// get role from getRole()
test("get individual's role", () => {
    const intern = new Intern (21, 'Andrew', 'andrew@gmail.com', 'PC');

    expect(intern.getRole()).toEqual('Intern');
});