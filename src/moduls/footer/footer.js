const builder = require('../elementBuilder');

module.exports = () => {
    const content = `<p>Easycode 2017 &copy;</p>`;
    return builder('footer', content , 'footer');
};
