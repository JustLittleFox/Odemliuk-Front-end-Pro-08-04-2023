function analyzeText(text) {
    const words = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/);
    const uniqueWordsSet = new Set(words);
    const uniqueWords = Array.from(uniqueWordsSet);
    return {
        uniqueWordsCount: uniqueWords.length,
        uniqueWords: uniqueWords
    };
}

let text = "one oNe, Two twO, thrEE THREE";

console.log(analyzeText(text).uniqueWordsCount);
console.log(analyzeText(text).uniqueWords);

