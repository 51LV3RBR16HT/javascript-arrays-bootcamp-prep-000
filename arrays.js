var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(Mars_Bar, Hersheys) {
  return [Hersheys, ...Mars_Bar];
}

function destructivelyAddElementToBeginningOfArray(Mars_Bar, Hersheys) {
  Mars_Bar.unshift(Hersheys);
  return Mars_Bar
}


