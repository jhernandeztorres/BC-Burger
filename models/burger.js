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

    delete: function(val, condition, cb){
        orm.delete("burgers", val, condition, (res) => {
            cb(res);
        })
    }
}

module.exports = burgers;