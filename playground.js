/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
*/

function isEmpty(value) {

  // 6 primitive types
  // number
  // bigint
  // string
  // boolean
  // null
  // undefined
  // symbol

  // Object *
  // Array *
  // Set *
  // Map *
  // Function
  // Regexp 
  // Date

  // function calcComplex() {
    
  // }

  // switch (value) {
  //   case 0, Number, null, true, false, '', undefined, [], {}:
  //     return true
  //     break;
  //   default:
  //     return calcComplex(value);  
  //     break;
  // }

  if (typeof value === 'number' || typeof value === 'boolean' || value === null || typeof value === 'undefined' || value === '') {
    return true;
  }
 
  if (Object.keys(value).length > 0) {
    return false;
  } 

  if (value.size > 0) {
    return false;
  }

  return true;

}

// // const map = new Map();
// // map.set('a', 1);

// const arr = [1,2];

// console.log(Object.keys(arr));

const res = isEmpty(0);
console.log('res', res);