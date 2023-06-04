// iffe annoy


//   1.odd


(function(odd){
    for (var i=0;i<odd.length;i++) {
        if(odd[i]%2!==0){
            console.log(odd[i]);
        }
    }
})([1,2,3,4,5,6,7,8,9,4,11,13,39,15,27]);


// 2.upper

(function(array){
    for (var i=0; i<array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase()+array[i].slice(1).toLowerCase();

    }
    console.log(array);
})(["hi","how","are","you","i","am","fine"]);


// 3.sum

(function(){
    var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    var sum = 0;
    for(let i=0;i<a.length;i++){
        sum+=i;
    }console.log(sum);
})();


// 4.prime iffe

(function() {
    var numbers = [2, 3, 4, 5, 6, 7, 8, 21, 23, 31, 17, 97, 9, 10, 11, 12, 13, 14, 15];
    var primes = [];
  
    for (var i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        primes.push(numbers[i]);
      }
    }
  
    console.log(primes);
  
    function isPrime(number) {
      if (number < 2) {
        return false;
      }
  
      for (var j = 2; j < number; j++) {
        if (number % j === 0) {
          return false;
        }
      }
  
      return true;
    }
  })();
  


// 5.palindrom


var array = ['level', 'hello', 'racecar', 'world', 'madam','mom','dad','5005'];

var palindromes = (function(arr) {
  var result = [];

  function isPalindrome(str) {
    var reversed = str.split('').reverse().join('');
    return str === reversed;
  }

 
  for (let i = 0; i < arr.length; i++) {
    var newarr = arr[i];

    if (isPalindrome(newarr)) {
      result.push(newarr);
    }
  }

  return result;
})(array);

console.log(palindromes);

//6. median of two sorted Array
  
var findMedianSortedArrays = (function() {
    function mergeArrays(arr1, arr2) {
      let merged = [];
      let i = 0;
      let j = 0;
  
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }
  
      while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
      }
  
      while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
      }
  
      return merged;
    }
  
    return function(arr1, arr2) {
      var merged = mergeArrays(arr1, arr2);
      var mid = Math.floor(merged.length / 2);
  
      if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
      } else {
        return merged[mid];
      }
    };
  })();
  
  let arr1 = [1, 3, 5];
  let arr2 = [2, 4, 6];
  let median = findMedianSortedArrays(arr1, arr2);
  
  console.log(median); 

// 7.Remove duplicates from an array


(function(){
    var arr=[1,2,3,4,5,6,6,5,4,7,8,9];
    var arr1=[];

    for (var i=0; i<arr.length; i++){
        if (arr1.indexOf(arr[i])=== -1){
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
})();

// 8. rotate array

var rotateArray = (function() {
    return function(array, k) {
      var rotationCount = k % array.length;
  
      if (rotationCount === 0) {
        return array;
      }
  
      var rotatedArray = [...array.slice(rotationCount), ...array.slice(0, rotationCount)];
      return rotatedArray;
    };
  })();
  
  var arr = [1, 2, 3, 4, 5];
  var rotatedArr = rotateArray(arr, 2);
  console.log(rotatedArr); 
  








  





// arrowfunctions

// 1.odd

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbers);




// 2. arrow upper

var stringArray = ["hello world", "foo bar", "baz qux","rapid"];

var titleCaseArray = stringArray.map(str => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

console.log(titleCaseArray);

// 3.sum of arry


const number=[1,2,3,4,5];
const sum=number.reduce((total,num)=>total+num,0);
console.log(sum)


// 4.arrow function prime


const nu = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Prime = num => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const primeNumber = nu.filter(Prime);

console.log(primeNumber);

// 5.palindrom

var getPalindromes = (array) => {
    return array.filter((word) => {
      var reWord = word.split('').reverse().join('');
      return word === reWord;
    });
  };
  
  var words = ['level', 'hello', 'madam', 'world', 'racecar'];
  var palindromes = getPalindromes(words);
  console.log(palindromes);
  

