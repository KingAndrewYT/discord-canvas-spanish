const Leaves = require("./Base2");

module.exports = class Goodbye extends Leaves {
    constructor() {
        super();
        this.textTitle = "DESPEDIDA";
        this.textMessage = "Grupo: {server}";
        this.colorTitle = "#df0909";
    }
};