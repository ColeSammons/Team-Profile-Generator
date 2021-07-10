const Intern = require('../lib/Intern');

test("creates a Intern object", () => {
    const intern = new Intern('Cole', '20', 'cole@gmail.com', 'ASU');

    expect(intern.name).toBe('Cole');
    expect(intern.id).toBe('20');
    expect(intern.email).toBe('cole@gmail.com');
    expect(intern.school).toBe('ASU');
});

test("gets name of intern", () => {
    const intern = new Intern('Cole', '20', 'cole@gmail.com', 'ASU');

    expect(intern.getName()).toBe('Cole');
});

test("gets id of intern", () => {
    const intern = new Intern('Cole', '20', 'cole@gmail.com', 'ASU');

    expect(intern.getId()).toBe('20');
});

test("gets email of intern", () => {
    const intern = new Intern('Cole', '20', 'cole@gmail.com', 'ASU');

    expect(intern.getEmail()).toBe('cole@gmail.com');
});

test("gets school of intern", () => {
    const intern = new Intern('Cole', '20', 'cole@gmail.com', 'ASU');

    expect(intern.getSchool()).toBe('ASU');
});

test("gets role of intern", () => {
    const intern = new Intern('Cole', '20', 'cole@gmail.com', 'ASU');

    expect(intern.getRole()).toBe('Intern');
});