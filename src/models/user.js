const fs = require("fs");


const user = {
    //fileName: "./data/users.json", // A Pablo le funciona con esta linea
    fileName: "./src//data/users.json", // A Elena/Melina le funciona con esta linea
    // Tenemos que ver este tema

    getdata: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
        return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function () {
        return this.getdata();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oseUser => oseUser.id == id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oseUser => oseUser[field] == text);
        return userFound;
    },

    create: function (userdata) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userdata
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
        return newUser;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter( oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, " "));
        return true;
    }
}
//console.log(user.create({name: "pepe", lastname: "jose", email: "a@s.com" }))
//console.log(user.delete(4))
module.exports = user;