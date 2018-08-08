/**
 * 生成范围在 start 和 end 之间的随机数字
 *
 * @param  {number} start 开始
 * @param  {number} end   结束
 * @return {number}       随机数
 */
exports.genNum = (start, end) => {
    return start + Math.floor(Math.random() * end);
};

/**
 * 生成长度为 start 到 end 之间的字符串，如果没有 end 参数，就固定为 start 长度
 *
 * @param  {number} start 开始
 * @param  {number} end 结束
 * @return {string}     字符串
 */
exports.genStr = (start, end) => {

    let chars = [
        'abcdefghijklmnopqrstuvwxyz',
        '0123456789',
    ].join('');

    let len = end ? this.genNum(start, end) : start;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
};

/**
 * 生成长度为 start 到 end 之间的汉字，如果没有 end 参数，就固定为 start 长度
 *
 * @param  {number} start 开始
 * @param  {number} end 结束
 * @return {string}     字符串
 */
exports.genHZ = (start, end) => {
    let chars = [
        '一二三四五六七八九十',
        '嘉琼桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓纨仪荷丹蓉眉君琴蕊薇菁',
        '梦岚苑婕馨瑗琰韵融园艺咏卿聪澜纯毓悦昭冰爽琬茗羽希宁欣飘育滢馥筠柔竹霭凝晓欢霄枫芸菲',
        '寒伊亚宜可姬舒影荔枝思丽秀娟英华慧巧美娜静淑惠珠翠雅芝玉萍红娥玲芬芳燕彩春菊勤珍贞莉',
        '兰凤洁梅琳素云莲真环雪荣爱妹霞香月莺媛艳瑞凡佳涛昌进林有坚和彪博诚先敬震振壮会群豪心',
        '邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔',
        '旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾伟刚勇毅俊峰强军平保东文辉力明永健世广',
        '志义兴良海山仁波宁贵福生龙元全国胜学祥才发成康星光天达安岩中茂武新利清飞彬富顺信子杰',
        '楠榕风航弘'
    ].join('');

    let len = end ? this.genNum(start, end) : start;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
};

/**
 * 生成随机 bool 值
 *
 * @return {boolean} 随机 bool 值
 */
exports.genBool = () => {
    return Math.random() > 0.5;
};

/**
 * 生成随机 时间 值
 *
 * @return {boolean} 随机 bool 值
 */
exports.genTime = () => {
    return new Date().getTime() + (Math.floor(Math.random() * 99999999999));
};

/**
 * 生成随机数
 *
 * @return {boolean} 随机 bool 值
 */
exports.genRandom = (max) => {
    return Math.floor(Math.random() * max);
};

/**
 * 生成随机浮点数，保留小数点后两位
 *
 * @return {number} 随机值
 */
exports.genRandomFloat = (max) => {
    return Math.round(Math.random() * max * 100) / 100;
};
