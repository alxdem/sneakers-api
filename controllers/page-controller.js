const fs = require('fs');

const getPageMain = (req, res) => {
    fs.readFile('./localDb/pages/main.json', 'utf8', function (err, data) {
        if (err) throw err;

        const pageData = JSON.parse(data);

        res
            .status(200)
            .json(pageData);
    });
};

module.exports = {
    getPageMain,
};