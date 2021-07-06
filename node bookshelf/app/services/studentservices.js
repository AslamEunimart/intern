class studentcontroller {
    studentController() {
        const stud = require("../model/student");
    }

    addStudent(tid, n, b) {
        this.stud = require("../model/student");
        console.log("@ student controller");

        this.stud
            .forge({ id: tid, name: n, branch: b })
            .save(null, { method: "insert" });
        console.log("in try block");

        console.log("student details added sucessfully");
    }

    readAllStudents() {
        this.stud = require("../model/student");
        this.stud.fetchAll().then(function(resData) {
            console.log(resData.toJSON());
            return resData.toJSON;
        });
    }

    updateStudent(tid, n, b) {
        stud
            .where({ id: tid })
            .save({ name: n, branch: b }, { patch: true })
            .then(function(x) {
                console.log(x.toJSON());
            });
    }
    deleteStudent(tid) {
        stud
            .query((qb) => {
                qb.whereIn("sid", [tid]);
            })
            .destroy()
            .then(function(x) {
                console.log(x.toJSON());
            });
    }
}
module.exports = new studentcontroller();