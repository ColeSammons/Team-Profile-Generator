const Engineer = require('../lib/Engineer');

test("creates a Engineer object", () => {
    const engineer = new Engineer('Cole', '20', 'cole@gmail.com', 'ColeSammons');

    expect(engineer.name).toBe('Cole');
    expect(engineer.id).toBe('20');
    expect(engineer.email).toBe('cole@gmail.com');
    expect(engineer.github).toBe('ColeSammons');
});

test("gets name of engineer", () => {
    const engineer = new Engineer('Cole', '20', 'cole@gmail.com', 'ColeSammons');

    expect(engineer.getName()).toBe('Cole');
});

test("gets id of engineer", () => {
    const engineer = new Engineer('Cole', '20', 'cole@gmail.com', 'ColeSammons');

    expect(engineer.getId()).toBe('20');
});

test("gets email of engineer", () => {
    const engineer = new Engineer('Cole', '20', 'cole@gmail.com', 'ColeSammons');

    expect(engineer.getEmail()).toBe('cole@gmail.com');
});

test("gets github of engineer", () => {
    const engineer = new Engineer('Cole', '20', 'cole@gmail.com', 'ColeSammons');

    expect(engineer.getGithub()).toBe('ColeSammons');
});

test("gets role of engineer", () => {
    const engineer = new Engineer('Cole', '20', 'cole@gmail.com', 'ColeSammons');

    expect(engineer.getRole()).toBe('Engineer');
});