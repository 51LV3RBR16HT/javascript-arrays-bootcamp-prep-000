var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(Mars_Bar, Hersheys) {
  return [Hersheys, ...Mars_Bar];
}

function destructivelyAddElementToBeginningOfArray(BonBons, Butterfinger) {
  BonBons.unshift(Butterfinger);
  return BonBons
}

function addElementToEndOfArray(Kisses, Ghirardelli) {
  return [...Kisses, Ghirardelli];
}
