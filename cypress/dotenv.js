const fs = require('fs');
const path = require('path');
const dotEnvJSON = require('dotenv-json');

const apply = (file) => {
    const fileName = `.env-${file}.json`;
    const dotEnvJSONFile = path.resolve(`${__dirname}/../.env-${file}.json`);
    if (fs.existsSync(dotEnvJSONFile)) {
        dotEnvJSON({ path: dotEnvJSONFile });
    } else {
        throw Error(`Please create ${fileName} in ${dotEnvJSONFile}`);
    }
};

module.exports = {
    apply
};
