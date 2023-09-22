const Role = Object.freeze({
    Admin: 'admin',
    Editor: 'editor',
    Reader: 'reader',
    SuperAdmin: 'superadmin',
});

delete Role.Reader; // doesn't work
console.log(Role.Admin); // 'admin';
Role.Admin = 'hello'; // doesn't change this property
Role.newProp = 'value'; // doesn't change Role object

class User {
    constructor(id, firstName, lastName, role) {

        Object.defineProperty(this, 'firstName', {
            value: firstName,
            writable: true,
        });

        Object.defineProperty(this, 'lastName', {
            value: lastName,
            writable: true,
        });

        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
        });
        Object.defineProperty(this, 'role', {
            value: role,
            writable: false,
        });
    }
}

const editor = new User(1, 'John', 'Doe', Role.Admin);
console.log(editor.role); // 'admin';
editor.role === Role.Admin; // true;
editor.role = false; // doesn't do anything
delete editor.role; // doesn't do anything