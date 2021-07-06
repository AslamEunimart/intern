const bookshelf = require("../util/db");
const stud = bookshelf.model("Student", {
    tableName: "student",
});
module.exports = stud;