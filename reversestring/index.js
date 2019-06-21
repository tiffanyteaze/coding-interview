// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let stringArray = [];
  let reverseArray = [];

  for (let i = 0; i < str.length; i++){
    let char = str[i];
    stringArray.push(char);
  }

  for (let j = 0; j < str.length; j++){
    let lastChar = stringArray.pop();
    reverseArray.push(lastChar);

  }
  let reverseString = reverseArray.toString();
  let noCommaString = reverseString.replace(/,/g,"");
  return noCommaString;
}

module.exports = reverse;
