const orm = require("../config/orm.js");

let burgers = {
    all: function(cb) {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    create: function(cols, val,cb){
        orm.create("burgers", cols, val,(res) => {
            cb(res);
        })
    },

    update: function(val,condition, cb){
        orm.update("burgers", val, condition, (res) => {
            cb(res);
        })
    },

    delete: function(condition, cb){
        orm.delete("burgers", condition, (res) => {
            cb(res);
        })
    }
}

module.exports = burgers;