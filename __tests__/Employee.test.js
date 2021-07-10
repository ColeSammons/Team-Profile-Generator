const Employee = require('../lib/Employee');

test("creates a Employee object", () => {
    const employee = new Employee('Cole', '20', 'cole@gmail.com');

    expect(employee.name).toBe('Cole');
    expect(employee.id).toBe('20');
    expect(employee.email).toBe('cole@gmail.com');
});

test("gets name of employee", () => {
    const employee = new Employee('Cole', '20', 'cole@gmail.com');

    expect(employee.getName()).toBe('Cole');
});

test("gets id of employee", () => {
    const employee = new Employee('Cole', '20', 'cole@gmail.com');

    expect(employee.getId()).toBe('20');
});

test("gets email of employee", () => {
    const employee = new Employee('Cole', '20', 'cole@gmail.com');

    expect(employee.getEmail()).toBe('cole@gmail.com');
});