class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.pollsCreated = []; // List of poll IDs created by the user
    }
}

module.exports = User;
