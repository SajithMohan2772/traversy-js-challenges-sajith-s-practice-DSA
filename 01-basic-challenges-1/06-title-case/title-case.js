function titleCase(str) {
    const Words = str.toLowerCase().split(' ');
    for(let i = 0; i < Words.length; i++){
        Words[i] = Words[i][0].toUpperCase() + Words[i].slice(1);
    }
    return Words.join(' ');
}

module.exports = titleCase;
