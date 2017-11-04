const $ = require('jquery');
const header = require("./moduls/header/header")();
const main = require("./moduls/main/main")();
const footer = require("./moduls/footer/footer")();


document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
