const builder = require('../elementBuilder');

module.exports = () => {
    const getDate = () => new Date().toLocaleDateString();
    const content = `
    <h1>Hello</h1>
    <h5>${getDate()}`;
    return builder('main', content , 'main');
};
