const random = require('../../common/random-data-gen');

module.exports = function () {

    const len = random.genNum(50, 200);
    const data = [];
    for (let i = 0; i < len; i++) {
        data.push({
            id: (random.genNum(10, 1000) + '').padStart(10, '0'),
            name: random.genHZ(2, 15),
            age: random.genNum(15, 20),
            gender: ['男', '女'][random.genNum(0, 1)],
            rank: i + 1
        });
    }

    return {
        code: 'ok',
        data: data
    };
};
