'use strict';

const Array = require('./array');

function main() {
  
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  //console.log(arr.ptr);
  arr.push(5);
  //console.log(arr.ptr);
  arr.push(15);
  //console.log(arr.ptr);
  arr.push(19);
  //console.log(arr.ptr);
  arr.push(45);
  //console.log(arr.ptr);
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

  ////console.log(arr);

  //Print the first item of the array
  ////console.log(arr.get(0));
  //3

  function urlIfy(str) {
    let newStr = '';
    return str.replace(/ /g, '%20');
  }
  //console.log(urlIfy('tauhida parveen'));
  //console.log(urlIfy('www.thinkful.com /tauh ida parv een'));

  
  let filteredArr = [];

  function filter(arr) {
    for(let i=0; i < arr.length; i++){
      if(arr[i] < 5) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }

  //const arr1 = [3,4,6,9,8,2];
  //console.log(filter(arr1));


  function maxSum(arr) {
    let maxSum = 0;
    let rolling = arr[0];
    for( let i = 1; i < arr.length; i++) {
      if(rolling > maxSum) {
        maxSum = rolling;
      }
      rolling += arr[i];
    }
    return maxSum;
  }

  //const arr2 = [4,6,-3,5,-2,1];
  //console.log(maxSum(arr2));

  function mergeArr(a,b) {
    let cArr = [];
    let length = 0;
    
    if(a.length === b.length){
      length = a.length;
    } else if(a.length > b.length) {
      length = a.length;
    } else {
      length = b.length;
    }

    for(let i = 0; i < length; i++) {
      if(a[i] !== undefined && b[i] !== undefined){
        if(a[i] < b[i] && a[i]) {
          cArr.push(a[i],b[i]);
        } else {
          cArr.push(b[i],a[i]);
        }
      }else{
        if(b[i] !== undefined){
          if(b[i] < cArr[cArr.length-1]){
            let holder = cArr[cArr.length-1];
            cArr.pop();
            cArr.push(b[i], holder);
          }
        }else if(a[i] !== undefined){
          if(a[i] < cArr[cArr.length-1]){
            let holder = cArr[cArr.length-1];
            cArr.pop();
            cArr.push(a[i], holder);
          }
        }
      }
        
    }
    return cArr;
  }

  //const bArr = [1, 3, 6, 8, 11];
  //const aArr = [2, 3, 5, 8, 9, 10];
  //console.log(mergeArr(aArr, bArr));

  function delChars(str, charsToRemove) {
    let delStr = str;
    for(let i = 0; i < charsToRemove.length; i++){
      for(let j = 0; j < str.length; j++){
        if(str[j] === charsToRemove[i]){
          delStr = delStr.replace(str[j], '');
        }
      }
    }
    return delStr;
  }

  //const str2 = 'Battle of the Vowels: Hawaii vs. Grozny';
  //const charsToRemove = 'aeiou';
  //console.log(delChars(str2, charsToRemove));

  function products(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      let prod = 1;
      for(let j = 0; j < arr.length; j++){
        prod = prod * arr[j];
      }
      newArr.push(prod / arr[i]);
    }
    return newArr;
  }

  //const prodArr = [1,3,9,4];
  //console.log(products(prodArr));

  function makeZero(arr) {
    return arr.map( row => {
      if(row.includes(0)){
        return row.map(element => {
          return 0;
        });
      }else {
        return row;
      }
    });
  }

  const arr2D = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
  ];
  //console.log(makeZero(arr2D));

  function stringRotation(str, strR, num) {
    return strR.endsWith(str.substr(0,num));
  }

  const str1 = 'amazon';
  const str2 = 'azonma';
  const str3 = 'azonam';
  console.log(stringRotation(str1, str2, 2));
  console.log(stringRotation(str1, str3, 2));
}

main();