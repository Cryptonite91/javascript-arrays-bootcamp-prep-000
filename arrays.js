var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']


function addElementToBeginningOfArray(){
  var	myBeginArray1 = [1]
  myBeginArray1.unshift('foo')
  return myBeginArray1
}

function destructivelyAddElementToBeginningOfArray(){
  myBeginArray2 = [1]
  myBeginArray2.unshift('foo')
  return myBeginArray2
}


function addElementToEndOfArray(){
  var	myEndArray1 = [1]
  myEndArray1.push('foo')
  return myEndArray1
}

function destructivelyAddElementToEndOfArray(){
  var myEndArray2 = [1]
  myEndArray2 = [...myEndArray2,'foo']
  return myEndArray2
}

function accessElementInArray(){
  var myAccessArray = [1,2,3]
  return myAccessArray[2]
  
}

function destructivelyRemoveElementFromBeginningOfArray(){
  myBeginArray3 = [1,2,3]
  myBeginArray3.shift()
  return myBeginArray3
}

function removeElementFromBeginningOfArray(){
  myRemoveArray = [1,2,3]
  myRemoveArray.slice(1)
  return myRemoveArray
}

function destructivelyRemoveElementFromEndOfArray(){
  myEndArray3 = [1,2,3]
  myEndArray3.pop()
  return myEndArray3
}

function removeElementFromEndOfArray(){
  myEndArray4 = [1,2,3]
  myEndArray4.slice(0,length -1)
  return myEndArray4
}