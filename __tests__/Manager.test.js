const Manager = require('../lib/Manager');

test("creates a Manager object", () => {
    const manager = new Manager('Cole', '20', 'cole@gmail.com', '42');

    expect(manager.name).toBe('Cole');
    expect(manager.id).toBe('20');
    expect(manager.email).toBe('cole@gmail.com');
    expect(manager.officeNumber).toBe('42');
});

test("gets name of manager", () => {
    const manager = new Manager('Cole', '20', 'cole@gmail.com', '42');

    expect(manager.getName()).toBe('Cole');
});

test("gets id of manager", () => {
    const manager = new Manager('Cole', '20', 'cole@gmail.com', '42');

    expect(manager.getId()).toBe('20');
});

test("gets email of manager", () => {
    const manager = new Manager('Cole', '20', 'cole@gmail.com', '42');

    expect(manager.getEmail()).toBe('cole@gmail.com');
});

test("gets github of manager", () => {
    const manager = new Manager('Cole', '20', 'cole@gmail.com', '42');

    expect(manager.getOfficeNumber()).toBe('42');
});

test("gets role of manager", () => {
    const manager = new Manager('Cole', '20', 'cole@gmail.com', '42');

    expect(manager.getRole()).toBe('Manager');
});