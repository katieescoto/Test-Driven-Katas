function wrap(string,columnNum) {
  let charCounter = 0;
  let wordArray = string.split(" ");
  let resultArray = [];
  for (let word of wordArray){
    if (charCounter + word.length < columnNum){
      resultArray = resultArray + word + " ";
      charCounter += word.length + 1;
      console.log(charCounter);
    } else {
      resultArray = `${resultArray} \n${word} `;
      charCounter = word.length;
    }
  }
  return resultArray.toString();;
}
wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20);

module.exports = wrap;
