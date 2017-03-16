//first drill
function wisePerson(wiseType, whatToSay) {
  // your code here
  //this code works too
  //var a = `A wise ${wiseType} once said: '${whatToSay}'`;
  //return a;
  return 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
}

wisePerson('goat', 'Hello world');

//Second drill
function shouter(whatToShout) {
  // your code here
  return whatToShout.toUpperCase() + '!!!';
}
shouter('fee figh foe fum');

//Third drill
function textNormalizer(text) {
  // your code here

  return text.toLowerCase().trim();

}
