const Welcomes = require("./Base");

module.exports = class Welcome extends Welcomes {
    constructor() {
        super();
        this.textTitle = "BIENVENIDA";
        this.textMessage = "Grupo: {server}";
        this.colorTitle = "#03A9F4";
    }
};