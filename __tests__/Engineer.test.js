const Engineer = require('../lib/Engineer');

// create engineer object
test('creates an engineer', () => {
    const engineer = new Engineer (21, 'Andrew', 'andrew@gmail.com', 'Stricker2');

    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getName()).toBe('Andrew');
    expect(engineer.getEmail()).toBe('andrew@gmail.com');
    expect(engineer.getGithub()).toBe('Stricker2');
});

// get id from getId()
test('get engineer id', () => {
    const engineer = new Engineer (21, 'Andrew', 'andrew@gmail.com', 'Stricker2');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

// get name from getName()
test('get engineer name', () => {
    const engineer = new Engineer (21, 'Andrew', 'andrew@gmail.com', 'Stricker2');

    expect(engineer.getName()).toEqual(expect.any(String));
});

// get email from getEmail()
test('get engineer email', () => {
    const engineer = new Engineer (21, 'Andrew', 'andrew@gmail.com', 'Stricker2');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("get engineer's github", () => {
    const engineer = new Engineer (21, 'Andrew', 'andrew@gmail.com', 'Stricker2');

    expect(engineer.getGithub()).toEqual(engineer.github.toString());
})

// get role from getRole()
test("get individual's role", () => {
    const engineer = new Engineer (21, 'Andrew', 'andrew@gmail.com', 'Stricker2');

    expect(engineer.getRole()).toEqual('Engineer');
});