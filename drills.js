'use strict';

const Array = require('./array');

function main() {
  
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  console.log(arr.ptr);
  arr.push(5);
  console.log(arr.ptr);
  arr.push(15);
  console.log(arr.ptr);
  arr.push(19);
  console.log(arr.ptr);
  arr.push(45);
  console.log(arr.ptr);
  arr.push(10);
  //Array { length: 6, _capacity: 12, ptr: 3 }
  //The length is 6 because there are now 6 items in the Array.
  //The _capacity is 12 because once the length was equal to previous capacity, the resize() is called and that value(4) is multiplied by the size ratio (3)
  //The Pointer value reflects the position in which new space is allocated during the resize() that increased _capacity.
  
  arr.pop();
  arr.pop();
  arr.pop();
  //Array { length: 3, _capacity: 12, ptr: 3 }
  //The length is 3 because each call to pop() removed the last element of the array, going from 6 to 3.
  //The _capacity is still 12 because the array doesn't resize when items are removed. That space is just reserved for future items to be added.
  //The Pointer value is also unchanged because the _capacity hasn't changed.

  console.log(arr);

  //Print the first item of the array
  console.log(arr.get(0));
  //3

}

main();