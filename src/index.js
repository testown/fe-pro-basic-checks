/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
//export const capitalizeString = 0;
export const capitalizeString = (string) => string.split(' ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');


/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
// export const fenceString = 0;
export function fenceString(string) {
    let arrString = string.split('');
    arrString = arrString.map((char, index) => 
        (index % 2) ? char.toUpperCase(): char.toLowerCase()
    );
    return arrString.join('');
};


/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
// export const reducerIf = 0;
export const reducerIf = function (action, string) {
    if (action === 'uppercase') {
        return string.toUpperCase();
    } else if (action === 'lowercase') {
        return string.toLowerCase();
    } else if (action === 'fence') {
        return fenceString(string);
    } else if (action === 'capitalize') {
        return capitalizeString(string);
    } else {
        return string;
    }
};


/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
// export const reducerSwitch = 0;
export const reducerSwitch = (action, string) => {
    switch(action) {
        case 'uppercase': 
            return string.toUpperCase();
        case 'lowercase':
            return string.toLowerCase();
        case 'fence':
            return fenceString(string);
        case 'capitalize':
            return capitalizeString(string);
        default:
            return string;
    }
};


/**
 Стрелочная
 * @param {string} string
 */
// export const consoleLoggerWordsForOf = 0;
export const consoleLoggerWordsForOf = (string) => {
    for (let char of string) console.log(char);
};


/**
 Стрелочная
 * @param {string} string
 */
// export const consoleLoggerWordsFor = 0;
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i < string.length; i++) console.log(string[i]);
};


/**
 Стрелочная
 * @param {string} string
 */
// export const consoleLoggerWordsWhile = 0;
export const consoleLoggerWordsWhile = (string) => {
    let counter = 0;
    while (counter < string.length) {
        console.log(string[counter]);
        counter++;
    }
};


/**
 Стрелочная
 * @param {string} string
 */
// export const consoleLoggerWordsSplit = 0;
export const consoleLoggerWordsSplit = (string) => {
    let arrChars = string.split('');
    for (let char of arrChars) console.log(char);
};
