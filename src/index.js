const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
  
    const words = expr.split(/\*{10}/);
    let lettersArr = [];
   
    for (const word of words) {
        let letters = '';          
        let wordEng = '';
        for (let i = 0; i < word.length; i = i + 10) {
            letters = (word.substring(i, i + 10));
            letters = letters.substring(letters.indexOf('1'))
            letters = letters.replace(/10/g, '.');
            letters = letters.replace(/11/g, '-');
            wordEng += MORSE_TABLE[letters];
        }        
        lettersArr.push(wordEng);
    }
    return (lettersArr.join(' '));
}

module.exports = {
    decode
}
