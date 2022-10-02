function isPalindrome(word) {
  const splitString = word.split("")
  const reverseArray = splitString.reverse()
  const joinArrray = reverseArray.join("")
  if (joinArrray === word){return true}
  else {return false}
}

/* 
 i looked up on goole how to reverse
*/

/*
 i split the satring and re-joined it
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

   console.log(isPalindrome("mom"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
