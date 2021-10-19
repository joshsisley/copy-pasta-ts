const wordSeparatorsRegEx =
  /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/;

const basicCamelRegEx =
  /^[a-z\u00E0-\u00FCA-Z\u00C0-\u00DC][\d|a-z\u00E0-\u00FCA-Z\u00C0-\u00DC]*$/;
const fourOrMoreConsecutiveCapsRegEx = /([A-Z\u00C0-\u00DC]{4,})/g;
const allCapsRegEx = /^[A-Z\u00C0-\u00DC]+$/;

const camelCase = (str: string) => {
  let words = str.split(wordSeparatorsRegEx);
  let len = words.length;
  let mappedWords = new Array(len);
  for (let i = 0; i < len; i++) {
    let word = words[i];
    if (word === "") {
      continue;
    }
    const isCamelCase = basicCamelRegEx.test(word) && !allCapsRegEx.test(word);
    if (isCamelCase) {
      word = word.replace(
        fourOrMoreConsecutiveCapsRegEx,
        function (match, p1, offset) {
          return deCap(match, word.length - offset - match.length == 0);
        }
      );
    }
    let firstLetter = word[0];
    firstLetter = i > 0 ? firstLetter.toUpperCase() : firstLetter.toLowerCase();
    mappedWords[i] =
      firstLetter +
      (!isCamelCase ? word.slice(1).toLowerCase() : word.slice(1));
  }
  return mappedWords.join("");
};

const deCap = (match: string, endOfWord: boolean) => {
  var arr = match.split("");
  var first = arr.shift().toUpperCase();
  var last = endOfWord ? arr.pop().toLowerCase() : arr.pop();
  return first + arr.join("").toLowerCase() + last;
};

export default camelCase;
