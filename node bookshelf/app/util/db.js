const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "1234",
        database: "db",
        charset: "utf8",
    },
});

bookshelf = require("bookshelf")(knex);

bookshelf.plugin("registry");
bookshelf.plugin("visibility");

module.exports = bookshelf;